import ComingSoon from 'components/ComingSoon'
import type { NextPage } from 'next'
import Head from 'next/head'

const Services: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jane Do Agency - Services</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col bg-[url("/services-pattern.webp")] pt-24 mix-blend-screen'>
        <ComingSoon />
      </main>
    </>
  )
}

export default Services
