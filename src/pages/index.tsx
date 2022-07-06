import MainSection from 'components/MainSection'
import DiscoverSection from 'components/DiscoverSection'
import ServicesSection from 'components/ServicesSection'
import JoinSection from 'components/JoinSection'
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
        <DiscoverSection />
        <ServicesSection />
        <JoinSection />
      </main>
    </>
  )
}

export default Home
