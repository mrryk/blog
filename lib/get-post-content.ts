import * as fs from 'fs'
import matter from 'gray-matter'
export const getPostContent = (fileName: string) => {
  const contents = fs.readFileSync(fileName, 'utf-8')
  const { data, content } = matter(contents)
  return {
    data,
    content,
  }
}
