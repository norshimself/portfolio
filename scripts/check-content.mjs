import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const problems = [];
let total = 0;
let published = 0;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const IMAGE = /!\[[^\]]+\]\((\/assets\/[a-zA-Z0-9_./-]+)\)/g;
const fence = String.fromCharCode(96).repeat(3);

for (const collection of ['blog', 'projects']) {
  const directory = join(root, 'content', collection);
  if (!existsSync(directory)) { problems.push('Missing content/' + collection); continue; }

  for (const filename of readdirSync(directory).filter(file => file.endsWith('.md'))) {
    total++;
    const reference = 'content/' + collection + '/' + filename;
    if (!SLUG.test(filename.slice(0, -3))) problems.push(reference + ': invalid URL slug');
    const text = readFileSync(join(directory, filename), 'utf8').replace(/\r\n/g, '\n');
    const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!match) { problems.push(reference + ': missing frontmatter'); continue; }

    const fields = {};
    for (const line of match[1].split('\n')) {
      if (!line.trim() || line.trim().startsWith('#')) continue;
      const index = line.indexOf(':');
      if (index < 1) { problems.push(reference + ': malformed frontmatter line'); continue; }
      const key = line.slice(0, index).trim();
      const rawValue = line.slice(index + 1).trim();
      try {
        fields[key] = rawValue.startsWith('[') || rawValue.startsWith('"')
          ? JSON.parse(rawValue)
          : rawValue;
      } catch { problems.push(reference + ': invalid JSON frontmatter for ' + key); }
    }

    for (const required of ['title', 'description']) {
      if (typeof fields[required] !== 'string' || !fields[required].trim()) {
        problems.push(reference + ': missing ' + required);
      }
    }
    if (fields.published !== 'true' && fields.published !== 'false') {
      problems.push(reference + ': published must be true or false');
    }
    if (fields.featured !== undefined && fields.featured !== 'true' && fields.featured !== 'false') {
      problems.push(reference + ': featured must be true or false');
    }
    if (fields.published === 'true') {
      published++;
      if (typeof fields.date !== 'string' || !DATE.test(fields.date) ||
          Number.isNaN(Date.parse(fields.date + 'T00:00:00Z'))) {
        problems.push(reference + ': published content needs a valid YYYY-MM-DD date');
      }
      if (/Replace with|DRAFT|lorem ipsum|placeholder/i.test(match[2])) {
        problems.push(reference + ': draft placeholders found in published content');
      }
    }
    for (const list of ['tags', 'stack']) {
      if (fields[list] !== undefined &&
          (!Array.isArray(fields[list]) || !fields[list].every(value => typeof value === 'string'))) {
        problems.push(reference + ': ' + list + ' must be a JSON-style array of strings');
      }
    }
    const assets = [...match[2].matchAll(IMAGE)].map(x => x[1]);
    if (typeof fields.cover === 'string') {
      if (!fields.cover.startsWith('/assets/') || fields.cover.includes('..')) {
        problems.push(reference + ': cover must use /assets/ in public');
      } else assets.push(fields.cover);
    }
    for (const asset of assets) {
      if (!existsSync(join(root, 'public', asset.slice(1)))) {
        problems.push(reference + ': missing asset ' + asset);
      }
    }
    if (match[2].split('\n').filter(line => line.startsWith(fence)).length % 2 !== 0) {
      problems.push(reference + ': unclosed code fence');
    }
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exitCode = 1;
} else {
  console.log('OK: ' + total + ' Markdown entries validated (' + published + ' published).');
}
