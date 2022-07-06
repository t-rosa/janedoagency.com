import Image from 'next/future/image'
import mobileBackground from 'images/home/main-mobile-bg.webp'
import tabletBackground from 'images/home/main-tablet-bg.webp'
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
          Partagez votre voix.
        </h1>
        <p className='max-w-xs text-center text-xl font-light'>
          Découvrez notre multitude de services et compétences à travers notre site internet ainsi
          que nos différents réseaux.
        </p>
        <button className='border py-2 px-4 font-display text-2xl font-bold uppercase'>
          découvrir
        </button>
      </div>
    </div>
  )
}
function Tablet() {
  return (
    <div className='hidden sm:block lg:hidden'>
      <div className='flex justify-end'>
        <Image
          src={tabletBackground}
          className='opacity-50 mix-blend-lighten'
          alt=''
          width={640}
          height={760}
        />
      </div>
      <div className='absolute inset-0 flex items-center px-5'>
        <div className='grid gap-10 pl-10'>
          <h1 className='max-w-sm font-display text-6xl font-bold'>Partagez votre voix.</h1>
          <p className='max-w-xs  text-2xl font-light'>
            Découvrez notre multitude de services et compétences à travers notre site internet ainsi
            que nos différents réseaux.
          </p>
          <button className='w-fit self-start border py-3 px-6 font-display text-3xl font-bold uppercase'>
            découvrir
          </button>
        </div>
      </div>
    </div>
  )
}
function MainSection() {
  return (
    <section className='relative'>
      <Mobile />
      <Tablet />
    </section>
  )
}

export default MainSection
