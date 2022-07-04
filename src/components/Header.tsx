import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import Logo from './Logo'

interface Props {
  overlayIsOpen: boolean
  setOverlayIsOpen: Dispatch<SetStateAction<boolean>>
}

function Mobile({ overlayIsOpen, setOverlayIsOpen }: Props) {
  return (
    <div className='ml-3 flex h-full justify-between sm:hidden'>
      <Logo withText />
      <button
        onClick={() => setOverlayIsOpen(!overlayIsOpen)}
        className='grid w-36 place-items-center border-l'
      >
        <div
          className={clsx(
            overlayIsOpen ? 'translate-y-4' : '-translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-11/12 bg-white duration-500'
          )}
        />
        <div
          className={clsx(
            overlayIsOpen ? '-translate-y-4' : 'translate-y-2',
            'col-[1/2] row-[1/2] h-1 w-11/12 bg-white duration-500'
          )}
        />
      </button>
    </div>
  )
}

function Tablet({ overlayIsOpen, setOverlayIsOpen }: Props) {
  return <div className='hidden sm:block xl:hidden'>tablet header</div>
}

function Desktop({ overlayIsOpen, setOverlayIsOpen }: Props) {
  return <div className='hidden xl:block'>desktop header</div>
}

function Header({ overlayIsOpen, setOverlayIsOpen }: Props) {
  return (
    <header
      className={clsx(
        overlayIsOpen ? 'bg-black' : 'bg-zinc-900 transition-colors delay-[300ms] ease-linear',
        'fixed inset-x-0 h-24 border-b'
      )}
    >
      <Mobile overlayIsOpen={overlayIsOpen} setOverlayIsOpen={setOverlayIsOpen} />
      <Tablet overlayIsOpen={overlayIsOpen} setOverlayIsOpen={setOverlayIsOpen} />
      <Desktop overlayIsOpen={overlayIsOpen} setOverlayIsOpen={setOverlayIsOpen} />
    </header>
  )
}

export default Header
