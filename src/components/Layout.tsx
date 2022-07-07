import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Overlay from './Overlay'
import homeVinylText from 'images/vinyl/text/accueil.svg'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [vinylText, setVinylText] = useState(homeVinylText)
  return (
    <>
      <Overlay
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
        vinylText={vinylText}
        setVinylText={setVinylText}
      />
      <Header
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
        setVinylText={setVinylText}
      />
      {children}
      <Footer />
    </>
  )
}

export default Layout
