import desktopBackground from 'images/home/discover-desktop-bg.webp'
import mobileBackground from 'images/home/discover-mobile-bg.webp'
import tabletBackground from 'images/home/discover-tablet-bg.webp'
import Image from 'next/future/image'

function Mobile() {
  return (
    <div className='sm:hidden'>
      <Image
        src={mobileBackground}
        className='opacity-50 mix-blend-lighten'
        alt=''
        width={640}
        height={760}
      />
      <div className='absolute inset-0 grid place-items-center px-5'>
        <h1 className='max-w-xs text-center font-display text-5xl font-bold'>
          Découvrez l&apos;agence.
        </h1>
        <p className='max-w-xs text-center text-xl font-light'>
          Jane Do est une agence qui vous accompagne sur les réseaux ou auprès des profressionnels.
          Ensemble, nous concevons une stratégie adaptée à vos moyens.
        </p>
      </div>
    </div>
  )
}

function Tablet() {
  return (
    <div className='hidden sm:block xl:hidden'>
      <Image
        src={tabletBackground}
        className='opacity-50 mix-blend-lighten'
        alt=''
        width={640}
        height={760}
      />
      <div className='absolute inset-0 flex items-center justify-end px-5'>
        <div className='grid gap-10 pr-10'>
          <h1 className='max-w-md text-right font-display text-7xl font-bold lg:max-w-xl lg:text-8xl'>
            Découvrez l&apos;agence.
          </h1>
          <p className='max-w-md justify-self-end text-right text-3xl font-light lg:max-w-lg lg:text-4xl'>
            Jane Do est une agence qui vous accompagne sur les réseaux ou auprès des
            profressionnels. Ensemble, nous concevons une stratégie adaptée à vos moyens.
          </p>
        </div>
      </div>
    </div>
  )
}

function Desktop() {
  return (
    <div className='hidden xl:block'>
      <Image
        src={desktopBackground}
        className=' mix-blend-lighten'
        alt=''
        width={800}
        height={940}
      />
      <div className='absolute inset-0 flex items-center justify-end px-5'>
        <div className='grid gap-10 pr-20'>
          <h1 className='max-w-3xl text-right font-display text-9xl font-bold'>
            Découvrez l&apos;agence
          </h1>
          <p className='max-w-xl justify-self-end text-right text-3xl font-light'>
            Jane Do est une agence de communication spécialisée dans l&apos;industrie musicale et le
            développement de la communication artistique. Que ce soit sur vos réseaux ou auprès des
            profressionnels, nous concevons une stratégie adaptée à vos moyens.
          </p>
        </div>
      </div>
    </div>
  )
}
function DiscoverSection() {
  return (
    <section id='discover' className='relative'>
      <Mobile />
      <Tablet />
      <Desktop />
    </section>
  )
}

export default DiscoverSection
