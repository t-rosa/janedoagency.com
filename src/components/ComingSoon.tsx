import Image from 'next/future/image'
import vinyl from 'images/vinyl/vinyl.webp'
import comingSoonVinylText from 'images/vinyl/text/coming-soon.svg'
function ComingSoon() {
  return (
    <section className='grid place-items-center p-5 mix-blend-lighten'>
      <Image
        src={vinyl}
        alt='Vinyle'
        width={800}
        height={800}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
      <Image
        src={comingSoonVinylText}
        alt='Coming soon'
        width={800}
        height={800}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
    </section>
  )
}

export default ComingSoon
