import BlogLayout from 'components/blog/BlogLayout'
import PostCard from 'components/blog/PostCard'
import { getAllPostsForHome } from 'lib/api'
import type { NextPage } from 'next'
import Head from 'next/head'

const Blog: NextPage = ({ allPosts }: any) => {
  return (
    <>
      <Head>
        <title>Jane Do Agency - Blog</title>
        <meta name='description' content={`Blog Jane Do Agency.`} />
      </Head>
      <BlogLayout>
        {allPosts.map((post: any) => (
          <PostCard
            key={post.title}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </BlogLayout>
    </>
  )
}

export default Blog

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
    revalidate: 10,
  }
}
