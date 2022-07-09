import Alert from './Alert'
import Meta from './Meta'

export default function BlogLayout({ preview, children }: any) {
  return (
    <>
      <Meta />
      <Alert preview={preview} />
      <div className='relative px-4 pt-24 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
        <div className='absolute inset-0'>
          <div className='h-1/3 sm:h-2/3' />
        </div>
        <div className='relative mx-auto max-w-7xl'>
          <h1 className='mb-24 text-center font-display text-8xl font-bold md:text-9xl lg:text-left'>
            Blog.
          </h1>
          <main className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
