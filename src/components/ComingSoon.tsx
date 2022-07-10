import comingSoonVinylText from 'images/vinyl/text/coming-soon.svg'
import vinyl from 'images/vinyl/vinyl.webp'
import Image from 'next/future/image'

function Mobile() {
  return (
    <div className='grid place-items-center p-5 mix-blend-lighten sm:hidden'>
      <Image
        src={vinyl}
        alt='Vinyle'
        width={250}
        height={250}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
      <Image
        src={comingSoonVinylText}
        alt='Coming soon'
        width={250}
        height={250}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
    </div>
  )
}

function Tablet() {
  return (
    <div className='hidden place-items-center p-5 mix-blend-lighten sm:grid lg:hidden'>
      <Image
        src={vinyl}
        alt='Vinyle'
        width={450}
        height={450}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
      <Image
        src={comingSoonVinylText}
        alt='Coming soon'
        width={450}
        height={450}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
    </div>
  )
}
function Desktop() {
  return (
    <div className='hidden place-items-center p-5 mix-blend-lighten lg:grid'>
      <Image
        src={vinyl}
        alt='Vinyle'
        width={700}
        height={700}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
      <Image
        src={comingSoonVinylText}
        alt='Coming soon'
        width={700}
        height={700}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
    </div>
  )
}
function ComingSoon() {
  return (
    <>
      <Mobile />
      <Tablet />
      <Desktop />
    </>
  )
}

export default ComingSoon
