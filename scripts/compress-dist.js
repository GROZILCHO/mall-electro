import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const distDir = path.resolve(process.cwd(), 'dist');

function compressFile(filePath) {
  const input = fs.createReadStream(filePath);
  const gzip = zlib.createGzip({ level: zlib.constants.Z_BEST_COMPRESSION });
  const outGz = fs.createWriteStream(filePath + '.gz');
  input.pipe(gzip).pipe(outGz);

  const input2 = fs.createReadStream(filePath);
  const brotli = zlib.createBrotliCompress({ params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } });
  const outBr = fs.createWriteStream(filePath + '.br');
  input2.pipe(brotli).pipe(outBr);
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else {
      const ext = path.extname(name).toLowerCase();
      if (['.js', '.css', '.html', '.json', '.svg', '.txt', '.xml'].includes(ext)) {
        console.log('Compressing', full);
        compressFile(full);
      }
    }
  }
}

if (!fs.existsSync(distDir)) {
  console.error('dist directory not found. Run `npm run build` first.');
  process.exit(1);
}

walk(distDir);
console.log('Compression started.');
