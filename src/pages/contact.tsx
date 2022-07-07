import ContactForm from 'components/ContactForm'
import type { NextPage } from 'next'
import Head from 'next/head'

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jane Do Agency - Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='pt-24'>
        <div className='overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-24'>
          <div className='relative mx-auto max-w-xl'>
            <svg
              className='absolute left-full translate-x-1/2 transform'
              width={404}
              height={404}
              fill='none'
              viewBox='0 0 404 404'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='85737c0e-0916-41d7-917f-596dc7edfa27'
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
                    className='text-zinc-100'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={404} fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)' />
            </svg>
            <svg
              className='absolute right-full bottom-0 -translate-x-1/2 transform'
              width={404}
              height={404}
              fill='none'
              viewBox='0 0 404 404'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='85737c0e-0916-41d7-917f-596dc7edfa27'
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
                    className='text-zinc-100'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={404} fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)' />
            </svg>
            <div className='text-center'>
              <h2 className='font-display text-3xl tracking-tight sm:text-5xl'>Contactez nous</h2>
            </div>
            <div className='mt-12'>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
