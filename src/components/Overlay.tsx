import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/future/image'
import vinyl from 'images/vinyl/vinyl.webp'
import homeVinylText from 'images/vinyl/text/accueil.svg'

interface Props {
  overlayIsOpen: boolean
}
const MENU = [
  {
    id: 1,
    label: 'équipe',
    url: '/team',
    delayIn: 'delay-500',
    delayOut: 'delay-1000',
  },
  {
    id: 2,
    label: 'services',
    url: '/services',
    delayIn: 'delay-600',
    delayOut: 'delay-1100',
  },
  {
    id: 3,
    label: 'réalisations',
    url: '/achievements',
    delayIn: 'delay-700',
    delayOut: 'delay-1200',
  },
  {
    id: 4,
    label: 'blog',
    url: '/blog',
    delayIn: 'delay-800',
    delayOut: 'delay-1300',
  },
  {
    id: 5,
    label: 'contact',
    url: '/contact',
    delayIn: 'delay-900',
    delayOut: 'delay-1400',
  },
]
function Mobile({ overlayIsOpen }: Props) {
  return (
    <div className='grid h-full place-items-center pt-24 lg:hidden'>
      <nav className='z-10'>
        <ul className='grid gap-6'>
          {MENU.map((item) => (
            <li key={item.id} className='overflow-y-hidden'>
              <Link href={item.url}>
                <a
                  className={clsx(
                    overlayIsOpen ? `translate-y-0 ` : `translate-y-full `,
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
          overlayIsOpen ? '-translate-x-1/2 delay-1000' : '-translate-x-full',
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
function Overlay({ overlayIsOpen }: Props) {
  return (
    <div
      className={clsx(
        overlayIsOpen ? 'translate-y-0' : '-translate-y-full delay-[1400ms]',
        'fixed inset-0 bg-black duration-500'
      )}
    >
      <Mobile overlayIsOpen={overlayIsOpen} />
    </div>
  )
}

export default Overlay
