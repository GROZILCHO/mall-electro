#!/usr/bin/env node
import express from 'express';
import path from 'path';
import fs from 'fs';
import mime from 'mime';

const port = process.env.PORT || process.argv[2] || 5000;
const distDir = path.join(process.cwd(), 'dist');
const app = express();

function sendCompressed(req, res, filePath) {
  const accept = req.headers['accept-encoding'] || '';
  if (accept.includes('br') && fs.existsSync(filePath + '.br')) {
    res.setHeader('Content-Encoding', 'br');
    res.setHeader('Content-Type', mime.getType(filePath) || 'application/octet-stream');
    return fs.createReadStream(filePath + '.br').pipe(res);
  }
  if (accept.includes('gzip') && fs.existsSync(filePath + '.gz')) {
    res.setHeader('Content-Encoding', 'gzip');
    res.setHeader('Content-Type', mime.getType(filePath) || 'application/octet-stream');
    return fs.createReadStream(filePath + '.gz').pipe(res);
  }
  res.setHeader('Content-Type', mime.getType(filePath) || 'application/octet-stream');
  return fs.createReadStream(filePath).pipe(res);
}

app.use((req, res, next) => {
  // Prevent path traversal
  if (req.path.includes('..')) return res.status(400).end();
  next();
});

app.get('*', (req, res) => {
  let filePath = path.join(distDir, req.path === '/' ? '/index.html' : req.path);

  // If the path is a directory, serve index.html (SPA)
  if (req.path.endsWith('/')) {
    filePath = path.join(distDir, 'index.html');
  }

  // If file exists, serve (with precompressed variants when available)
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return sendCompressed(req, res, filePath);
  }

  // SPA fallback: serve index.html
  const indexPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.setHeader('Content-Type', 'text/html');
    return sendCompressed(req, res, indexPath);
  }

  res.status(404).send('Not found');
});

app.listen(port, () => {
  console.log(`Preview server (with precompressed support) running at http://localhost:${port}`);
});
