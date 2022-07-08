import clsx from 'clsx'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import Link from 'next/link'
import { selectHomePage, selectNavigationMenu, synchronizeCurrentPage } from 'slices/navigation'
import { closeOverlay, selectOverlay, toggleOverlay } from 'slices/overlay'
import Logo from './Logo'

function Mobile() {
  const overlay = useAppSelector(selectOverlay)
  const homePage = useAppSelector(selectHomePage)
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
                  dispatch(synchronizeCurrentPage(homePage))
                }, 1500)
              } else {
                dispatch(synchronizeCurrentPage(homePage))
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

function Desktop() {
  const overlay = useAppSelector(selectOverlay)
  const menu = useAppSelector(selectNavigationMenu)
  const homePage = useAppSelector(selectHomePage)
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
                  dispatch(synchronizeCurrentPage(homePage))
                }, 1500)
              } else {
                dispatch(synchronizeCurrentPage(homePage))
              }
            }}
          >
            <Logo withText />
          </a>
        </Link>
        <ul
          className={clsx(overlay.isOpen ? 'opacity-0' : 'opacity-100', 'flex gap-5 duration-500')}
        >
          {menu.map((page) => (
            <li key={page.id}>
              <Link href={page.url}>
                <a
                  onClick={() => {
                    dispatch(synchronizeCurrentPage(page))
                  }}
                  className='relative block before:absolute before:bottom-0 before:h-[1px] before:w-0 before:bg-hover before:duration-500 hover:text-hover before:hover:w-full'
                >
                  <div className='text-xl font-light'>0{page.id}.</div>
                  <div className='font-display text-2xl capitalize'>{page.label}</div>
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

function Header() {
  const overlay = useAppSelector(selectOverlay)
  return (
    <header
      className={clsx(
        overlay.isOpen ? 'bg-black' : 'bg-zinc-900 transition-colors delay-[1700ms] ease-linear',
        'fixed inset-x-0 z-10 h-24 border-b'
      )}
    >
      <Mobile />
      <Desktop />
    </header>
  )
}

export default Header
