#!/usr/bin/env node
import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';
import mime from 'mime';

const port = process.env.PORT || process.argv[2] || 5000;
const distDir = path.join(process.cwd(), 'dist');

function sendFile(res, filePath, reqHeaders) {
  const accept = (reqHeaders['accept-encoding'] || '');
  try {
    if (accept.includes('br') && fs.existsSync(filePath + '.br')) {
      res.writeHead(200, {
        'Content-Encoding': 'br',
        'Content-Type': mime.getType(filePath) || 'application/octet-stream'
      });
      fs.createReadStream(filePath + '.br').pipe(res);
      return;
    }
    if (accept.includes('gzip') && fs.existsSync(filePath + '.gz')) {
      res.writeHead(200, {
        'Content-Encoding': 'gzip',
        'Content-Type': mime.getType(filePath) || 'application/octet-stream'
      });
      fs.createReadStream(filePath + '.gz').pipe(res);
      return;
    }
    res.writeHead(200, { 'Content-Type': mime.getType(filePath) || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    res.writeHead(500);
    res.end('Server error');
  }
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url || '/');
  let pathname = decodeURIComponent(parsed.pathname || '/');
  if (pathname.includes('..')) {
    res.writeHead(400);
    res.end('Bad request');
    return;
  }

  let filePath = path.join(distDir, pathname);

  // If path is directory, fallback to index.html
  if (pathname.endsWith('/')) {
    filePath = path.join(distDir, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    sendFile(res, filePath, req.headers);
    return;
  }

  // If file doesn't exist, serve SPA index.html
  const indexPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    sendFile(res, indexPath, req.headers);
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`Preview (simple) running at http://localhost:${port}`);
});
