import Alert from 'components/blog/Alert'
import CoverImage from 'components/blog/CoverImage'
import PostBody from 'components/blog/PostBody'
import PostTitle from 'components/blog/PostTitle'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Post({ post, morePosts, preview }: any) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div className='py-24'>
      {preview && <Alert preview={preview} />}
      {router.isFallback ? (
        <PostTitle>Chargement…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title}</title>
              <meta property='og:image' content={post.ogImage.url} />
            </Head>
            <div className='overflow-hidden '>
              <div className='relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8'>
                <div className='absolute top-0 bottom-0 left-3/4 hidden w-screen bg-[url("/services-pattern.webp")] mix-blend-screen lg:block' />
                <div className='mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8'>
                  <div>
                    <h1 className='mt-2 text-3xl font-extrabold leading-8 tracking-tight text-hover sm:text-4xl'>
                      {post.title}
                    </h1>
                  </div>
                </div>
                <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
                  <div className='relative lg:col-start-2 lg:row-start-1'>
                    <svg
                      className='absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block'
                      width={404}
                      height={384}
                      fill='none'
                      viewBox='0 0 404 384'
                      aria-hidden='true'
                    >
                      <defs>
                        <pattern
                          id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits='userSpaceOnUse'
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className='text-gray-200'
                            fill='currentColor'
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                      />
                    </svg>
                    <div className='relative mx-auto max-w-prose text-base lg:max-w-none'>
                      <figure>
                        <div className='aspect-w-12 aspect-h-7 lg:aspect-none border border-zinc-700 shadow-xl'>
                          <CoverImage
                            responsiveImage={post.coverImage.responsiveImage}
                            title={post.title}
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className='mt-8 lg:mt-0'>
                    <PostBody content={post.content} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </>
      )}
    </div>
  )
}

export async function getStaticProps({ params, preview = false }: any) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const content = await markdownToHtml(data?.post?.content || '')

  return {
    props: {
      preview,
      post: {
        ...data?.post,
        content,
      },
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post: any) => `/blog/${post.slug}`) || [],
    fallback: true,
  }
}
