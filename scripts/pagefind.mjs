import { spawnSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'

function hasHtml(dir, depth = 0) {
  if (!existsSync(dir) || depth > 8) return false
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isFile() && entry.name.endsWith('.html')) return true
    if (entry.isDirectory() && hasHtml(full, depth + 1)) return true
  }
  return false
}

const site = ['.vercel/output/static', '.next/server/app', '.next/server/pages'].find(hasHtml)

if (!site) {
  console.warn('pagefind: no HTML output found, skipping search index')
  process.exit(0)
}

const result = spawnSync(
  'npx',
  ['pagefind', '--site', site, '--output-path', 'public/_pagefind'],
  { stdio: 'inherit' }
)

if (result.status !== 0) {
  console.warn('pagefind: index build failed, continuing without search')
  process.exit(0)
}
