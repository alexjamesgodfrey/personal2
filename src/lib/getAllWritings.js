import glob from 'fast-glob'
import * as path from 'path'

async function importwriting(writingFilename) {
  let { meta, default: component } = await import(
    `../pages/writings/${writingFilename}`
  )
  return {
    slug: writingFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllwritings() {
  let writingFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/writings'),
  })

  let writings = await Promise.all(writingFilenames.map(importwriting))

  return writings.sort((a, z) => new Date(z.date) - new Date(a.date))
}
