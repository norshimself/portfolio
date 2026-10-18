import { readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const portfolioData = readFileSync(join(root, 'data/portfolio.ts'), 'utf8');
const images = [...portfolioData.matchAll(/\bimage:\s*['"]([^'"]+)['"]/g)].map(match => match[1]);
const paths = [
  ...new Set([
    ...images.filter(image => image.startsWith('/assets/')),
    '/assets/images/about/profile.webp',
    '/assets/video/hero-bg.mp4',
  ]),
];

const problems = [];
const external = images.filter(image => /^https?:\/\//i.test(image));
if (external.length) problems.push('External images need review: ' + external.join(', '));

for (const asset of paths) {
  const file = join(root, 'public', asset.slice(1));
  if (!existsSync(file)) {
    problems.push('Missing asset: ' + asset);
    continue;
  }
  if (statSync(file).size === 0) problems.push('Empty asset: ' + asset);
  if (asset.endsWith('.svg') && !readFileSync(file, 'utf8').includes('<svg')) {
    problems.push('Invalid SVG: ' + asset);
  }
}

if (!existsSync(join(root, 'app/favicon.ico'))) {
  problems.push('Missing app/favicon.ico');
}
const layout = readFileSync(join(root, 'app/layout.tsx'), 'utf8');
const styles = readFileSync(join(root, 'app/globals.css'), 'utf8');
if (!layout.includes('Geist') || !layout.includes('Rajdhani')) {
  problems.push('Next.js font setup is incomplete');
}
if (styles.includes('fonts.googleapis.com/css2')) {
  problems.push('Google Fonts CSS import duplicates next/font');
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exitCode = 1;
} else {
  console.log('OK: ' + paths.length + ' local image/video references and favicon exist.');
  console.log('OK: Geist + Rajdhani fonts configured without redundant CSS imports.');
}
