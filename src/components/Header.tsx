import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import Logo from './Logo'

import homeVinylText from 'images/vinyl/text/accueil.svg'
import { useAppSelector } from 'hooks/useAppSelector'
import { closeOverlay, selectOverlay, toggleOverlay } from 'slices/overlay'
import { useAppDispatch } from 'hooks/useAppDispatch'

interface Props {
  MENU: any[]
  setVinylText: Dispatch<SetStateAction<string>>
}

function Mobile({ setVinylText }: Props) {
  const overlay = useAppSelector(selectOverlay)
  const dispatch = useAppDispatch()
  return (
    <div className='ml-3 flex h-full justify-between lg:hidden'>
      <nav className='flex items-center'>
        <Link href='/'>
          <a
            onClick={() => {
              if (overlay.isOpen) {
                dispatch(closeOverlay())
                setTimeout(() => {
                  setVinylText(homeVinylText)
                }, 1500)
              } else {
                setVinylText(homeVinylText)
              }
            }}
          >
            <Logo withText />
          </a>
        </Link>
      </nav>
      <button
        aria-label='Ouvrir/Fermer le menu'
        onClick={() => dispatch(toggleOverlay())}
        className='grid w-36 place-items-center border-l'
      >
        <div
          className={clsx(
            overlay.isOpen ? 'translate-y-4' : '-translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-9/12 bg-white duration-500'
          )}
        />
        <div
          className={clsx(
            overlay.isOpen ? '-translate-y-4' : 'translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-9/12 bg-white duration-500'
          )}
        />
      </button>
    </div>
  )
}

function Desktop({ MENU, setVinylText }: Props) {
  const overlay = useAppSelector(selectOverlay)
  const dispatch = useAppDispatch()
  return (
    <div className='ml-10 hidden h-full grid-cols-[auto_10rem] gap-10 lg:grid'>
      <nav className='col-[1/2] flex items-center justify-between'>
        <Link href='/'>
          <a
            onClick={() => {
              if (overlay.isOpen) {
                dispatch(closeOverlay())
                setTimeout(() => {
                  setVinylText(homeVinylText)
                }, 1500)
              } else {
                setVinylText(homeVinylText)
              }
            }}
          >
            <Logo withText />
          </a>
        </Link>
        <ul
          className={clsx(overlay.isOpen ? 'opacity-0' : 'opacity-100', 'flex gap-5 duration-500')}
        >
          {MENU.map((item) => (
            <li key={item.id}>
              <Link href={item.url}>
                <a
                  onClick={() => setVinylText(item.vinylText)}
                  className='relative block before:absolute before:bottom-0 before:h-[1px] before:w-0 before:bg-hover before:duration-500 hover:text-hover before:hover:w-full'
                >
                  <div className='text-xl font-light'>0{item.id}.</div>
                  <div className='font-display text-2xl capitalize'>{item.label}</div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        aria-label='Ouvrir/Fermer le menu'
        onClick={() => dispatch(toggleOverlay())}
        className='col-[2/3] grid place-items-center border-l'
      >
        <div
          className={clsx(
            overlay.isOpen ? 'translate-y-4' : '-translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-9/12 bg-white duration-500'
          )}
        />
        <div
          className={clsx(
            overlay.isOpen ? '-translate-y-4' : 'translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-9/12 bg-white duration-500'
          )}
        />
      </button>
    </div>
  )
}

function Header({ MENU, setVinylText }: Props) {
  const overlay = useAppSelector(selectOverlay)
  return (
    <header
      className={clsx(
        overlay.isOpen ? 'bg-black' : 'bg-zinc-900 transition-colors delay-[1700ms] ease-linear',
        'fixed inset-x-0 z-10 h-24 border-b'
      )}
    >
      <Mobile MENU={MENU} setVinylText={setVinylText} />
      <Desktop MENU={MENU} setVinylText={setVinylText} />
    </header>
  )
}

export default Header
