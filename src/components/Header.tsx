import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  overlayIsOpen: boolean
  setOverlayIsOpen: Dispatch<SetStateAction<boolean>>
}

function Header({ overlayIsOpen, setOverlayIsOpen }: Props) {
  return (
    <header
      className={clsx(
        overlayIsOpen ? 'bg-black' : 'bg-zinc-900 transition-colors delay-[300ms] ease-linear',
        'fixed inset-x-0 h-24 border-b'
      )}
    >
      <button onClick={() => setOverlayIsOpen(!overlayIsOpen)}>toggle overlay</button>
    </header>
  )
}

export default Header
