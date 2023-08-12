import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

export const markdownToHtml = async (content: string) => {
  const result = await remark().use(remarkGfm).use(remarkHtml).process(content)
  return result.toString()
}
