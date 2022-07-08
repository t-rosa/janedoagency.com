import desktopBackground from 'images/home/main-desktop-bg.webp'
import mobileBackground from 'images/home/main-mobile-bg.webp'
import tabletBackground from 'images/home/main-tablet-bg.webp'
import Image from 'next/future/image'
import Link from 'next/link'

function Mobile() {
  return (
    <div className='sm:hidden'>
      <Image
        src={mobileBackground}
        className='opacity-50 mix-blend-lighten'
        alt='Image de fond de la section principale'
        width={640}
        height={984}
        priority
      />
      <div className='absolute inset-0 grid place-items-center px-5'>
        <h1 className='max-w-xs text-center font-display text-5xl font-bold'>
          Partagez votre voix.
        </h1>
        <p className='max-w-xs text-center text-xl font-light'>
          Découvrez notre multitude de services et compétences à travers notre site internet ainsi
          que nos différents réseaux.
        </p>
        <Link href='#discover'>
          <a className='border py-2 px-4 font-display text-2xl font-bold uppercase'>découvrir</a>
        </Link>
      </div>
    </div>
  )
}

function Tablet() {
  return (
    <div className='hidden sm:block xl:hidden'>
      <div className='flex justify-end'>
        <Image
          src={tabletBackground}
          className='opacity-50 mix-blend-lighten'
          alt='Image de fond de la section principale'
          width={640}
          height={760}
          priority
        />
      </div>
      <div className='absolute inset-0 flex items-center px-5'>
        <div className='grid gap-10 pl-10'>
          <h1 className='max-w-md font-display text-7xl font-bold lg:max-w-xl lg:text-8xl'>
            Partagez votre voix.
          </h1>
          <p className='max-w-md text-3xl font-light lg:max-w-lg lg:text-4xl'>
            Découvrez notre multitude de services et compétences à travers notre site internet ainsi
            que nos différents réseaux.
          </p>
          <Link href='#discover'>
            <a className='w-fit self-start border py-3 px-6 font-display text-3xl font-bold uppercase hover:border-hover hover:text-hover lg:py-4 lg:px-8 lg:text-4xl'>
              découvrir
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Desktop() {
  return (
    <div className='hidden xl:block'>
      <div className='flex justify-end'>
        <Image
          src={desktopBackground}
          className='mix-blend-lighten'
          alt='Image de fond de la section principale'
          width={800}
          height={940}
          priority
        />
      </div>
      <div className='absolute inset-0 flex items-center px-5'>
        <div className='grid gap-10 pl-20'>
          <h1 className='max-w-3xl font-display text-9xl font-bold'>Partagez votre voix.</h1>
          <p className='max-w-xl  text-3xl font-light'>
            Découvrez notre multitude de services et compétences à travers notre site internet ainsi
            que nos différents réseaux. Jane Do c&apos;est l’agence qui vous aidera à trouver votre
            place, qu’importe votre style !
          </p>
          <Link href='#discover'>
            <a className='w-fit self-start border py-4 px-8 font-display text-4xl font-bold uppercase hover:border-hover hover:text-hover'>
              découvrir
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
function MainSection() {
  return (
    <section className='relative sm:mb-24'>
      <Mobile />
      <Tablet />
      <Desktop />
    </section>
  )
}

export default MainSection
