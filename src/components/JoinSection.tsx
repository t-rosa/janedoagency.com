import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import Image from 'next/future/image'
import Link from 'next/link'
import { selectNavigationMenu, synchronizeCurrentPage } from 'slices/navigation'

function Mobile() {
  const navigation = useAppSelector(selectNavigationMenu)
  const dispatch = useAppDispatch()
  return (
    <div className='sm:hidden'>
      <Image
        src='https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318241/join-mobile-bg_ejuquq.webp'
        className='opacity-50 mix-blend-lighten'
        alt='Image de fond de la section "rejoindre"'
        width={640}
        height={760}
      />
      <div className='absolute inset-0 grid place-items-center px-5'>
        <h1 className='max-w-xs text-center font-display text-5xl font-bold'>
          Rejoignez l&apos;aventure.
        </h1>
        <p className='max-w-xs text-center text-xl font-light'>
          Vous avez des questions, des demandes ou un projet à nous faire découvrir ? Nous sommes à
          votre écoute !
        </p>
        <Link href='/contact'>
          <a
            onClick={() => dispatch(synchronizeCurrentPage(navigation.at(4)))}
            className='border py-2 px-4 font-display text-xl font-bold uppercase'
          >
            nous contacter
          </a>
        </Link>
      </div>
    </div>
  )
}

function Tablet() {
  const navigation = useAppSelector(selectNavigationMenu)
  const dispatch = useAppDispatch()
  return (
    <div className='hidden sm:block xl:hidden'>
      <div className='flex justify-end'>
        <Image
          src='https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318242/join-tablet-bg_cwyl3o.webp'
          className='opacity-50 mix-blend-lighten'
          alt='Image de fond de la section "rejoindre"'
          width={640}
          height={760}
        />
      </div>
      <div className='absolute inset-0 flex items-center px-5'>
        <div className='grid gap-10 pl-10'>
          <h1 className='max-w-md font-display text-7xl font-bold lg:max-w-xl lg:text-8xl'>
            Rejoignez l&apos;aventure.
          </h1>
          <p className='max-w-md text-3xl font-light lg:max-w-lg lg:text-4xl'>
            Découvrez notre multitude de services et compétences à travers notre site internet ainsi
            que nos différents réseaux.
          </p>
          <Link href='/contact'>
            <a
              onClick={() => dispatch(synchronizeCurrentPage(navigation.at(4)))}
              className='w-fit self-start border py-3 px-6 font-display text-3xl font-bold uppercase hover:border-hover hover:text-hover lg:py-4 lg:px-8 lg:text-4xl'
            >
              nous contacter
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

function Desktop() {
  const navigation = useAppSelector(selectNavigationMenu)
  const dispatch = useAppDispatch()

  return (
    <div className='hidden xl:block'>
      <div className='flex justify-end'>
        <Image
          src='https://res.cloudinary.com/toma-rosa-ynov/image/upload/v1657318241/join-desktop-bg_l1bxpk.webp'
          className=' mix-blend-lighten'
          alt='Image de fond de la section "rejoindre"'
          width={800}
          height={940}
        />
      </div>
      <div className='absolute inset-0 flex items-center px-5'>
        <div className='grid gap-10 pl-20'>
          <h1 className='max-w-3xl font-display text-9xl font-bold'>Rejoignez l&apos;aventure</h1>
          <p className='max-w-xl  text-3xl font-light'>
            Découvrez notre multitude de services et compétences à travers notre site internet ainsi
            que nos différents réseaux. Jane Do c&apos;est l’agence qui vous aidera à trouver votre
            place, qu’importe votre style !
          </p>
          <Link href='/contact'>
            <a
              onClick={() => dispatch(synchronizeCurrentPage(navigation.at(4)))}
              className='w-fit self-start border py-4 px-8 font-display text-4xl font-bold uppercase hover:border-hover hover:text-hover'
            >
              nous contacter
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
function JoinSection() {
  return (
    <section className='relative'>
      <Mobile />
      <Tablet />
      <Desktop />
    </section>
  )
}

export default JoinSection
