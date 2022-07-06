import Image from 'next/future/image'
import mobileBackground from 'images/home/main-mobile-bg.webp'
function Mobile() {
  return (
    <div className='relative -z-10 mix-blend-lighten sm:hidden'>
      <Image src={mobileBackground} className='opacity-50' alt='' width={640} height={984} />
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
function MainSection() {
  return (
    <section>
      <Mobile />
    </section>
  )
}

export default MainSection
