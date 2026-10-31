import fs from 'fs';
import path from 'path';

// Content ported from the old Sorta México site (legal pages and the resource library).
const DIR = path.join(process.cwd(), 'content');

export function readContent(...parts) {
  return JSON.parse(fs.readFileSync(path.join(DIR, ...parts), 'utf8'));
}

export function postSlugs() {
  return fs
    .readdirSync(path.join(DIR, 'recursos'))
    .filter((f) => f.endsWith('.json') && f !== 'index.json')
    .map((f) => f.replace(/\.json$/, ''));
}
