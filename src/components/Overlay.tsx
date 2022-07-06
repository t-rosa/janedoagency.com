import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/future/image'
import vinyl from 'images/vinyl/vinyl.webp'
import homeVinylText from 'images/vinyl/text/accueil.svg'

interface Props {
  isOverlayOpen: boolean
}
const MENU = [
  {
    id: 1,
    label: 'équipe',
    url: '/team',
    delayIn: 'delay-300',
    delayOut: 'delay-600',
  },
  {
    id: 2,
    label: 'services',
    url: '/services',
    delayIn: 'delay-400',
    delayOut: 'delay-700',
  },
  {
    id: 3,
    label: 'réalisations',
    url: '/achievements',
    delayIn: 'delay-500',
    delayOut: 'delay-800',
  },
  {
    id: 4,
    label: 'blog',
    url: '/blog',
    delayIn: 'delay-600',
    delayOut: 'delay-900',
  },
  {
    id: 5,
    label: 'contact',
    url: '/contact',
    delayIn: 'delay-700',
    delayOut: 'delay-1000',
  },
]
function Mobile({ isOverlayOpen }: Props) {
  return (
    <div className='flex h-full items-center pt-24 lg:hidden'>
      <nav className='z-10 mx-auto'>
        <ul className='grid gap-6'>
          {MENU.map((item) => (
            <li key={item.id} className='overflow-y-hidden'>
              <Link href={item.url}>
                <a
                  className={clsx(
                    isOverlayOpen ? `translate-y-0 ` : `translate-y-full `,
                    `block transition-transform ${item.delayIn} duration-500 `
                  )}
                >
                  <span className='text-xl font-light'>0{item.id}.</span>&nbsp;
                  <span className='font-display text-4xl font-bold capitalize'>{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={clsx(
          isOverlayOpen ? '-translate-x-1/2 delay-1000' : '-translate-x-full',
          'absolute left-0 grid opacity-50 transition-transform duration-500'
        )}
      >
        <Image
          src={vinyl}
          alt=''
          className='col-[1/2] row-[1/2] animate-spin-vinyl'
          width={500}
          height={500}
        />
        <Image
          src={homeVinylText}
          alt=''
          className='col-[1/2] row-[1/2] animate-spin-vinyl'
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
function Desktop({ isOverlayOpen }: Props) {
  return (
    <div className='hidden h-full grid-cols-[60%_auto] pt-24 lg:grid'>
      <nav className='relative z-10 grid h-full place-items-center bg-black'>
        <ul className='grid gap-6'>
          {MENU.map((item) => (
            <li key={item.id} className='overflow-y-hidden'>
              <Link href={item.url}>
                <a
                  className={clsx(
                    isOverlayOpen
                      ? `translate-y-0 ${item.delayIn}`
                      : `translate-y-full ${item.delayOut}`,
                    'block w-fit cursor-pointer capitalize transition-transform duration-500 before:absolute before:bottom-0 before:h-[1px] before:w-0 before:bg-hover before:duration-500 hover:text-hover before:hover:w-full'
                  )}
                >
                  <span className='text-xl font-light'>0{item.id}.</span>&nbsp;
                  <span className='font-display text-4xl font-bold capitalize'>{item.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={clsx(
            isOverlayOpen ? 'h-full delay-900' : 'h-0 delay-300',
            'absolute top-0 right-0 w-[1px] bg-white duration-500'
          )}
        />
      </nav>
      <aside
        className={clsx(
          isOverlayOpen ? '-translate-x-1/2 delay-[1200ms]' : '-translate-x-full',
          'grid place-items-center duration-500'
        )}
      >
        <Image
          src={vinyl}
          alt=''
          className='col-[1/2] row-[1/2] animate-spin-vinyl'
          width={800}
          height={800}
        />
        <Image
          src={homeVinylText}
          alt=''
          className='col-[1/2] row-[1/2] animate-spin-vinyl'
          width={800}
          height={800}
        />
      </aside>
    </div>
  )
}
function Overlay({ isOverlayOpen }: Props) {
  return (
    <div
      className={clsx(
        isOverlayOpen ? 'translate-y-0' : '-translate-y-full delay-[1300ms]',
        'fixed inset-0 bg-black duration-500'
      )}
    >
      <Mobile isOverlayOpen={isOverlayOpen} />
      <Desktop isOverlayOpen={isOverlayOpen} />
    </div>
  )
}

export default Overlay
