import fs from 'fs'
import { join } from 'path'
const dirPath = join(process.cwd(), '_posts')

export const getAllSlugs = () => {
  return fs.readdirSync(dirPath).map((f) => f.replace(/\.md$/, ''))
}
