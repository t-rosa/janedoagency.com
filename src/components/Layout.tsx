import homeVinylText from 'images/vinyl/text/accueil.svg'
import { ReactNode, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Overlay from './Overlay'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  const [vinylText, setVinylText] = useState(homeVinylText)

  return (
    <>
      <Overlay vinylText={vinylText} setVinylText={setVinylText} />
      <Header setVinylText={setVinylText} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
