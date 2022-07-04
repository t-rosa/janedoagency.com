import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  overlayIsOpen: boolean
  setOverlayIsOpen: Dispatch<SetStateAction<boolean>>
}

function Mobile({ overlayIsOpen, setOverlayIsOpen }: Props) {
  return <div className='md:hidden'></div>
}

function Tablet({ overlayIsOpen, setOverlayIsOpen }: Props) {
  return <div className='hidden md:block xl:hidden'>tablet header</div>
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
