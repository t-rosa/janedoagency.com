import { ReactNode, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Overlay from './Overlay'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <>
      <Overlay isOverlayOpen={isOverlayOpen}/>
      <Header isOverlayOpen={isOverlayOpen} setIsOverlayOpen={setIsOverlayOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
