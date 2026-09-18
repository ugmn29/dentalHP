import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(projectDir, 'out');

function gitValue(args, fallback = 'unknown') {
  try {
    return execFileSync('git', args, {
      cwd: projectDir,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return fallback;
  }
}

const metadata = {
  commit: process.env.CF_PAGES_COMMIT_SHA || process.env.GITHUB_SHA || gitValue(['rev-parse', 'HEAD']),
  branch:
    process.env.CF_PAGES_BRANCH ||
    process.env.GITHUB_REF_NAME ||
    gitValue(['branch', '--show-current']),
  source: process.env.CF_PAGES ? 'cloudflare-pages' : process.env.GITHUB_ACTIONS ? 'github-actions' : 'local',
  builtAt: new Date().toISOString(),
};

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'deployment.json'), `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
console.log(`Deployment metadata: ${metadata.commit} (${metadata.branch})`);
