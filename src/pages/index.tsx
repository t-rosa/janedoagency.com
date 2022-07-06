import MainSection from 'components/MainSection'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jane Do Agency - Accueil</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col pt-24'>
        <MainSection />
      </main>
    </>
  )
}

export default Home
