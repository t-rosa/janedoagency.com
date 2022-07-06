import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import Logo from './Logo'

import teamText from 'images/vinyl/text/equipe.svg'
import servicesText from 'images/vinyl/text/services.svg'
import achievementsText from 'images/vinyl/text/realisations.svg'
import blogText from 'images/vinyl/text/blog.svg'
import contactText from 'images/vinyl/text/contact.svg'

interface Props {
  isOverlayOpen: boolean
  setIsOverlayOpen: Dispatch<SetStateAction<boolean>>
}

const MENU = [
  {
    id: 1,
    label: 'équipe',
    path: '/team',
    vinylText: teamText,
  },
  {
    id: 2,
    label: 'services',
    path: '/services',
    vinylText: servicesText,
  },
  {
    id: 3,
    label: 'réalisations',
    path: '/achievements',
    vinylText: achievementsText,
  },
  {
    id: 4,
    label: 'blog',
    path: '/blog',
    vinylText: blogText,
  },
  {
    id: 5,
    label: 'contact',
    path: '/contact',
    vinylText: contactText,
  },
]

function Mobile({ isOverlayOpen, setIsOverlayOpen }: Props) {
  return (
    <div className='ml-3 flex h-full justify-between lg:hidden'>
      <nav className='flex items-center'>
        <Link href='/'>
          <a>
            <Logo withText />
          </a>
        </Link>
      </nav>
      <button
        onClick={() => setIsOverlayOpen(!isOverlayOpen)}
        className='grid w-36 place-items-center border-l'
      >
        <div
          className={clsx(
            isOverlayOpen ? 'translate-y-4' : '-translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-9/12 bg-white duration-500'
          )}
        />
        <div
          className={clsx(
            isOverlayOpen ? '-translate-y-4' : 'translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-9/12 bg-white duration-500'
          )}
        />
      </button>
    </div>
  )
}

function Desktop({ isOverlayOpen, setIsOverlayOpen }: Props) {
  return (
    <div className='ml-10 hidden h-full grid-cols-[auto_10rem] gap-10 lg:grid'>
      <nav className='col-[1/2] flex items-center justify-between'>
        <Link href='/'>
          <a>
            <Logo withText />
          </a>
        </Link>
        <ul
          className={clsx(isOverlayOpen ? 'opacity-0' : 'opacity-100', 'flex gap-5 duration-500')}
        >
          {MENU.map((item) => (
            <li key={item.id}>
              <Link href={item.path}>
                <a className='relative before:absolute before:bottom-0 before:h-[1px] before:w-0 before:bg-hover before:duration-500 hover:text-hover before:hover:w-full'>
                  <div className='text-xl font-light'>0{item.id}.</div>
                  <div className='font-display text-2xl capitalize'>{item.label}</div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setIsOverlayOpen(!isOverlayOpen)}
        className='col-[2/3] grid place-items-center border-l'
      >
        <div
          className={clsx(
            isOverlayOpen ? 'translate-y-4' : '-translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-9/12 bg-white duration-500'
          )}
        />
        <div
          className={clsx(
            isOverlayOpen ? '-translate-y-4' : 'translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-9/12 bg-white duration-500'
          )}
        />
      </button>
    </div>
  )
}

function Header({ isOverlayOpen, setIsOverlayOpen }: Props) {
  return (
    <header
      className={clsx(
        isOverlayOpen ? 'bg-black' : 'bg-zinc-900 transition-colors delay-[1700ms] ease-linear',
        'fixed inset-x-0 h-24 border-b'
      )}
    >
      <Mobile isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} />
      <Desktop isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} />
    </header>
  )
}

export default Header
