import { getAllSlugs } from '@/get-all-slug'
import { GetStaticPathsResult, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { getPostContent } from '../../../lib/get-post-content'
import { markdownToHtml } from '../../../lib/markdown-to-html'

export const getStaticPaths = (): GetStaticPathsResult => {
  return {
    fallback: false,
    paths: getAllSlugs().map((slug, _) => {
      return {
        params: {
          slug,
        },
      }
    }),
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: ParsedUrlQuery | undefined
}): Promise<GetStaticPropsResult<{ content: string; title: string }>> => {
  const slug = params?.slug
  return {
    props: {
      content: await markdownToHtml(
        getPostContent(`_posts/${slug}.md`).content
      ),
      title: getPostContent(`_posts/${slug}.md`).data['title'],
    },
  }
}
const Article = ({ content, title }: { content: string; title: string }) => {
  return (
    <>
      <h1 className="text-center mt-5 text-3xl font-bold">{title}</h1>
      <article
        className="container"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  )
}

export default Article
