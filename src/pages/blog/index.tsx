import BlogLayout from 'components/blog/BlogLayout'
import PostCard from 'components/blog/PostCard'
import { getAllPostsForHome } from 'lib/api'
import type { NextPage } from 'next'
import Head from 'next/head'

const Blog: NextPage = ({ allPosts }: any) => {
  return (
    <BlogLayout>
      <Head>
        <title>Jane Do Agency - Blog</title>
      </Head>
      {allPosts.map((post: any) => (
        <PostCard
          key={post.id}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </BlogLayout>
  )
}

export default Blog

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts },
  }
}
