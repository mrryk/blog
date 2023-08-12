import fs from 'fs'
import { join } from 'path'
import { getPostContent } from './get-post-content'
const dirPath = join(process.cwd(), '_posts')

export const getAllPosts = () => {
  const slugs = fs.readdirSync(dirPath)
  const posts = slugs.map((s, _) => {
    const slug = s.replace(/\.md$/, '')
    const { data } = getPostContent(`_posts/${slug}.md`)
    return {
      slug,
      data,
    }
  })

  posts.sort((post1, post2) =>
    post1.data['date'] > post2.data['date'] ? -1 : 1
  )
  return posts
}
