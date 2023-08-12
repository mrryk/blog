import { getAllPosts } from '@/get-all-posts'
import { GetStaticPropsResult } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

type PostProps = {
  slug: string
  data: {
    [key: string]: any
  }
}[]

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = (): GetStaticPropsResult<{
  posts: PostProps
}> => {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

const Home = ({ posts }: { posts: PostProps }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center p-24 ${inter.className}`}
    >
      <h1 className="text-2xl">投稿一覧</h1>
      <ul>
        {posts.map((item, _) => (
          <li key={item.slug} className="m-10">
            <Link
              className="text-xl text-blue-400"
              href={`/posts/${item.slug}`}
            >
              {item.data['title']}
            </Link>
            <p>{item.data['date']}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
