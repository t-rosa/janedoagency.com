import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'

interface Props {
  overlayIsOpen: boolean
  setOverlayIsOpen: Dispatch<SetStateAction<boolean>>
}

function Overlay({ overlayIsOpen, setOverlayIsOpen }: Props) {
  return (
    <div
      className={clsx(
        overlayIsOpen ? 'translate-y-0' : '-translate-y-full',
        'fixed inset-0 bg-black duration-500'
      )}
    >
      overlay
    </div>
  )
}

export default Overlay
