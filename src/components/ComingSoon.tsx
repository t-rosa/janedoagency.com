import comingSoonVinylText from 'images/vinyl/text/coming-soon.svg'
import vinyl from 'images/vinyl/vinyl.webp'
import Image from 'next/future/image'

function ComingSoon() {
  return (
    <section className='grid place-items-center p-5 mix-blend-lighten'>
      <Image
        src='https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318250/vinyl_rbvbbx.webp'
        alt='Vinyle'
        width={800}
        height={800}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
      <Image
        src='https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318248/coming-soon_kcjada.svg'
        alt='Coming soon'
        width={800}
        height={800}
        className='col-[1/2] row-[1/2] animate-spin-vinyl'
      />
    </section>
  )
}

export default ComingSoon
