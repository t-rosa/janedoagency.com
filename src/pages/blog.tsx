import ComingSoon from 'components/ComingSoon'
import type { NextPage } from 'next'
import Head from 'next/head'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jane Do Agency - Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col pt-24'>
        <ComingSoon />
      </main>
    </>
  )
}

export default Blog