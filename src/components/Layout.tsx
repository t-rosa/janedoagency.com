import { ReactNode, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Overlay from './Overlay'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  const [overlayIsOpen, setOverlayIsOpen] = useState(false)
  return (
    <>
      <Overlay overlayIsOpen={overlayIsOpen} setOverlayIsOpen={setOverlayIsOpen} />
      <Header overlayIsOpen={overlayIsOpen} setOverlayIsOpen={setOverlayIsOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
