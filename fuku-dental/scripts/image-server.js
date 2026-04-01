#!/usr/bin/env node
/**
 * 画像管理用サーバー（開発専用）
 *
 * 使い方:
 *   node scripts/image-server.js
 *
 * http://localhost:3002 で管理ページのアップロードAPIが動作します。
 * Next.jsのdev serverとは別ポートで動作します。
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;
const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images', 'pages');

function sanitizePath(inputPath) {
  return inputPath.replace(/\.\./g, '').replace(/[^a-zA-Z0-9\-\/]/g, '');
}

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendJson(res, statusCode, data) {
  setCorsHeaders(res);
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function parseMultipartFormData(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const contentType = req.headers['content-type'] || '';
      const boundaryMatch = contentType.match(/boundary=(.+)/);
      if (!boundaryMatch) {
        reject(new Error('No boundary found'));
        return;
      }

      const boundary = boundaryMatch[1];
      const parts = {};
      const raw = buffer.toString('binary');
      const segments = raw.split(`--${boundary}`);

      for (const segment of segments) {
        if (segment === '--\r\n' || segment === '--' || !segment.trim()) continue;

        const headerEnd = segment.indexOf('\r\n\r\n');
        if (headerEnd === -1) continue;

        const header = segment.substring(0, headerEnd);
        const body = segment.substring(headerEnd + 4, segment.length - 2);

        const nameMatch = header.match(/name="([^"]+)"/);
        if (!nameMatch) continue;

        const name = nameMatch[1];
        const filenameMatch = header.match(/filename="([^"]+)"/);

        if (filenameMatch) {
          const start = buffer.indexOf(Buffer.from('\r\n\r\n', 'binary'), buffer.indexOf(nameMatch[0])) + 4;
          const boundaryBuf = Buffer.from(`\r\n--${boundary}`, 'binary');
          let end = buffer.indexOf(boundaryBuf, start);
          if (end === -1) end = buffer.length;
          parts[name] = { filename: filenameMatch[1], data: buffer.slice(start, end) };
        } else {
          parts[name] = body.trim();
        }
      }

      resolve(parts);
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);

  // GET /check - 画像の存在チェック
  if (req.method === 'GET' && url.pathname === '/check') {
    const pagePath = url.searchParams.get('path');
    const imageId = url.searchParams.get('imageId') || 'hero';

    if (!pagePath) {
      return sendJson(res, 400, { error: 'path is required' });
    }

    const safePath = sanitizePath(pagePath);
    const safeImageId = sanitizePath(imageId);
    const targetFile = path.join(PUBLIC_DIR, safePath, `${safeImageId}.jpg`);

    try {
      fs.accessSync(targetFile);
      sendJson(res, 200, { exists: true });
    } catch {
      sendJson(res, 200, { exists: false });
    }
    return;
  }

  // GET /check-all - 全画像の一括チェック
  if (req.method === 'GET' && url.pathname === '/check-all') {
    const configPath = path.join(__dirname, '..', 'lib', 'pageImageConfig.ts');
    const status = {};

    try {
      // ディレクトリを再帰的にスキャン
      function scanDir(dir, relativePath = '') {
        if (!fs.existsSync(dir)) return;
        const items = fs.readdirSync(dir, { withFileTypes: true });
        for (const item of items) {
          if (item.isDirectory()) {
            scanDir(path.join(dir, item.name), `${relativePath}/${item.name}`);
          } else if (item.name.endsWith('.jpg')) {
            const pagePath = relativePath;
            const imageId = item.name.replace('.jpg', '');
            if (!status[pagePath]) status[pagePath] = {};
            status[pagePath][imageId] = true;
          }
        }
      }
      scanDir(PUBLIC_DIR);
    } catch (e) {
      // ディレクトリが存在しない場合は空を返す
    }

    sendJson(res, 200, status);
    return;
  }

  // POST /upload - 画像アップロード
  if (req.method === 'POST' && url.pathname === '/upload') {
    try {
      const parts = await parseMultipartFormData(req);
      const file = parts.file;
      const pagePath = parts.path;
      const imageId = parts.imageId;

      if (!file || !pagePath || !imageId) {
        return sendJson(res, 400, { error: 'file, path, imageId are required' });
      }

      const safePath = sanitizePath(pagePath);
      const safeImageId = sanitizePath(imageId);
      const targetDir = path.join(PUBLIC_DIR, safePath);
      const targetFile = path.join(targetDir, `${safeImageId}.jpg`);

      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(targetFile, file.data);

      sendJson(res, 200, {
        success: true,
        path: `/images/pages${safePath}/${safeImageId}.jpg`,
      });
    } catch (error) {
      console.error('Upload error:', error);
      sendJson(res, 500, { error: 'Upload failed' });
    }
    return;
  }

  // DELETE /delete - 画像削除
  if (req.method === 'DELETE' && url.pathname === '/delete') {
    try {
      let body = '';
      for await (const chunk of req) body += chunk;
      const { path: pagePath, imageId } = JSON.parse(body);

      if (!pagePath || !imageId) {
        return sendJson(res, 400, { error: 'path and imageId are required' });
      }

      const safePath = sanitizePath(pagePath);
      const safeImageId = sanitizePath(imageId);
      const targetFile = path.join(PUBLIC_DIR, safePath, `${safeImageId}.jpg`);

      if (fs.existsSync(targetFile)) {
        fs.unlinkSync(targetFile);
        sendJson(res, 200, { success: true });
      } else {
        sendJson(res, 404, { error: 'File not found' });
      }
    } catch (error) {
      console.error('Delete error:', error);
      sendJson(res, 500, { error: 'Delete failed' });
    }
    return;
  }

  sendJson(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
  console.log(`\n  画像管理サーバー起動中: http://localhost:${PORT}`);
  console.log(`  保存先: ${PUBLIC_DIR}\n`);
});
