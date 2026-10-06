import { mkdir, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

const serviceDomain =
  process.env.MICROCMS_SERVICE_DOMAIN ||
  process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN ||
  '';
const apiKey =
  process.env.MICROCMS_API_KEY ||
  process.env.NEXT_PUBLIC_MICROCMS_API_KEY ||
  '';

if (!serviceDomain || !apiKey) {
  throw new Error(
    'microCMS build credentials are missing. Set MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY.'
  );
}

const apiUrl = `https://${serviceDomain}.microcms.io/api/v1/articles`;
const limit = 100;

async function fetchPage(offset) {
  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    orders: '-publishedDate,-publishedAt',
    cacheBust:
      process.env.CF_PAGES_COMMIT_SHA ||
      process.env.NEXT_PUBLIC_BUILD_ID ||
      String(Date.now()),
  });

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(`${apiUrl}?${params.toString()}`, {
      headers: { 'X-MICROCMS-API-KEY': apiKey },
      cache: 'no-store',
    });

    if (response.ok) return response.json();

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === 4) {
      throw new Error(`microCMS article snapshot failed: ${response.status}`);
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 250 * 2 ** attempt)
    );
  }

  throw new Error('microCMS article snapshot failed');
}

const articles = [];
let offset = 0;
let totalCount = 0;

do {
  const page = await fetchPage(offset);
  articles.push(...page.contents);
  totalCount = page.totalCount;
  offset += page.contents.length;
} while (offset < totalCount);

const outputDirectory = path.join(process.cwd(), 'generated');
const outputPath = path.join(outputDirectory, 'microcms-articles.json');
const temporaryPath = `${outputPath}.${process.pid}.tmp`;

await mkdir(outputDirectory, { recursive: true });
await writeFile(temporaryPath, JSON.stringify(articles), 'utf8');
await rename(temporaryPath, outputPath);

console.log(`microCMS article snapshot: ${articles.length} articles`);
