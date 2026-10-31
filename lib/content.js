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
    .filter((f) => f.endsWith('.json') && !f.startsWith('_') && f !== 'index.json')
    .map((f) => f.replace(/\.json$/, ''));
}

// The imported library index plus guides written for Kensa (content/recursos/_nuevas.json),
// which go first in their group so the newest reads lead.
export function readIndex() {
  const index = readContent('recursos', 'index.json');
  const extra = readContent('recursos', '_nuevas.json');
  return {
    groups: index.groups.map((g) => ({
      ...g,
      entries: [...extra.entries.filter((e) => e.group === g.id).map(({ group, ...e }) => e), ...g.entries],
    })),
  };
}
