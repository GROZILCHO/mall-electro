import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import glob from 'glob';

// This script converts selected source images to AVIF and WebP at multiple sizes.
// Run with: node scripts/convert-images.js
// Requires `sharp` and `glob` (install with `npm i -D sharp glob`).

const srcPatterns = [
  'assets/images/about/hero-about.*',
  'assets/images/home/hero-home.*',
  'assets/images/industries/hero_industriy.*',
  'assets/images/services/hero-services.*'
];

const outputDir = path.join(process.cwd(), 'assets', 'optimized');
const sizes = [480, 768, 1024, 1600];
const formats = ['avif', 'webp'];

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function convertFile(file) {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const relDir = path.dirname(file).replace(path.join(process.cwd(), 'assets'), '');
  const outBaseDir = path.join(outputDir);
  await ensureDir(outBaseDir);

  for (const w of sizes) {
    for (const fmt of formats) {
      const outName = `${base}-${w}.${fmt}`;
      const outPath = path.join(outBaseDir, outName);
      try {
        await sharp(file)
          .resize({ width: w })
          [fmt]({ quality: 80 })
          .toFile(outPath);
        console.log('Written', outPath);
      } catch (err) {
        console.error('Failed to write', outPath, err);
      }
    }
  }
}

(async function main(){
  await ensureDir(outputDir);
  for (const pattern of srcPatterns) {
    const matches = glob.sync(pattern, { nodir: true });
    for (const m of matches) {
      console.log('Converting', m);
      await convertFile(m);
    }
  }
  console.log('Done. Generated optimized images in assets/optimized');
})();
