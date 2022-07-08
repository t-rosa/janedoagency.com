import clsx from 'clsx'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import vinyl from 'images/vinyl/vinyl.webp'
import Image from 'next/future/image'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { selectCurrentPage, selectNavigationMenu, synchronizeCurrentPage } from 'slices/navigation'
import { closeOverlay, selectOverlay } from 'slices/overlay'

interface Props {
  vinylText: string
  setVinylText: Dispatch<SetStateAction<string>>
}

function Mobile() {
  const overlay = useAppSelector(selectOverlay)
  const menu = useAppSelector(selectNavigationMenu)
  const currentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()

  return (
    <div
      className={clsx(
        overlay.isOpen ? 'opacity-100 delay-500' : 'opacity-0 delay-1300',
        'flex h-full min-h-[500px] items-center pt-24 lg:hidden'
      )}
    >
      <nav className='z-10 mx-auto'>
        <ul className='grid gap-6'>
          {menu.map((page) => (
            <li key={page.id} className='overflow-y-hidden'>
              <Link href={page.url}>
                <a
                  onClick={() => {
                    setTimeout(() => {
                      dispatch(synchronizeCurrentPage(page))
                    }, 1500)
                    dispatch(closeOverlay())
                  }}
                  className={clsx(
                    overlay.isOpen ? `translate-y-0 ` : `translate-y-full `,
                    `block transition-transform ${page.delayIn} duration-500 `
                  )}
                >
                  <span className='text-xl font-light'>0{page.id}.</span>&nbsp;
                  <span className='font-display text-4xl font-bold capitalize'>{page.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={clsx(
          overlay.isOpen ? '-translate-x-1/2 delay-1000' : '-translate-x-full',
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
          src={currentPage.vinylText}
          alt=''
          className='col-[1/2] row-[1/2] animate-spin-vinyl'
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
function Desktop() {
  const overlay = useAppSelector(selectOverlay)
  const menu = useAppSelector(selectNavigationMenu)
  const currentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()

  return (
    <div
      className={clsx(
        overlay.isOpen ? 'opacity-100 delay-500' : 'opacity-0 delay-1300',
        'hidden h-full min-h-[500px] grid-cols-[60%_auto] pt-24 lg:grid'
      )}
    >
      <nav className='relative z-10 grid h-full place-items-center bg-black'>
        <ul className='grid gap-6'>
          {menu.map((page) => (
            <li key={page.id} className='overflow-y-hidden'>
              <Link href={page.url}>
                <a
                  onClick={() => {
                    setTimeout(() => {
                      dispatch(synchronizeCurrentPage(page))
                    }, 1500)
                    dispatch(closeOverlay())
                  }}
                  className={clsx(
                    overlay.isOpen
                      ? `translate-y-0 ${page.delayIn}`
                      : `translate-y-full ${page.delayOut}`,
                    'block w-fit cursor-pointer capitalize transition-transform duration-500 before:absolute before:bottom-0 before:h-[1px] before:w-0 before:bg-hover before:duration-500 hover:text-hover before:hover:w-full'
                  )}
                >
                  <span className='text-xl font-light'>0{page.id}.</span>&nbsp;
                  <span className='font-display text-4xl font-bold capitalize'>{page.label}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={clsx(
            overlay.isOpen ? 'h-full delay-900' : 'h-0 delay-300',
            'absolute top-0 right-0 w-[1px] bg-white duration-500'
          )}
        />
      </nav>
      <aside
        className={clsx(
          overlay.isOpen ? '-translate-x-1/2 delay-[1200ms]' : '-translate-x-full',
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
          src={currentPage.vinylText}
          alt=''
          className='col-[1/2] row-[1/2] animate-spin-vinyl'
          width={800}
          height={800}
        />
      </aside>
    </div>
  )
}

function Overlay() {
  const overlay = useAppSelector(selectOverlay)
  return (
    <div
      className={clsx(
        overlay.isOpen ? 'translate-y-0' : '-translate-y-full delay-[1300ms]',
        'fixed inset-0 z-10 bg-black duration-500'
      )}
    >
      <Mobile />
      <Desktop />
    </div>
  )
}

export default Overlay
