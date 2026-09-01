#!/usr/bin/env node
/*
  Simple MDX frontmatter validator.
  - Scans content/ and docs/ for .md and .mdx files
  - Validates required frontmatter fields: title, summary, published, draft, tags
  - Exits with non-zero code on validation failures
*/

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = process.cwd();
const scanDirs = ['content', 'docs', 'pages', 'src', ''];
const exts = ['.md', '.mdx', '.markdown'];

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (exts.includes(path.extname(file).toLowerCase())) results.push(file);
    }
  });
  return results;
}

function checkFile(file) {
  const src = fs.readFileSync(file, 'utf8');
  const parsed = matter(src);
  const data = parsed.data || {};
  const missing = [];
  const required = ['title','summary','published','draft','tags'];
  required.forEach(f => {
    if (typeof data[f] === 'undefined' || data[f] === null || data[f] === '') missing.push(f);
  });
  return missing;
}

let files = [];
for (const d of scanDirs) {
  const full = path.join(ROOT, d);
  files = files.concat(walk(full));
}

if (files.length === 0) {
  console.log('No markdown/MDX files found to validate.');
  process.exit(0);
}

let failed = false;
for (const f of files) {
  try {
    const missing = checkFile(f);
    if (missing.length) {
      failed = true;
      console.error(`Validation failed: ${f}`);
      console.error(`  Missing fields: ${missing.join(', ')}`);
    }
  } catch (err) {
    failed = true;
    console.error(`Error parsing ${f}: ${err.message}`);
  }
}

if (failed) {
  console.error('\nFrontmatter validation failed. See errors above.');
  process.exit(2);
}

console.log('Frontmatter validation passed for all checked files.');
process.exit(0);
