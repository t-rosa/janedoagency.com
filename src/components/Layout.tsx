import homeVinylText from 'images/vinyl/text/accueil.svg'
import blogVinylText from 'images/vinyl/text/blog.svg'
import contactVinylText from 'images/vinyl/text/contact.svg'
import teamVinylText from 'images/vinyl/text/equipe.svg'
import achievementsVinylText from 'images/vinyl/text/realisations.svg'
import servicesVinylText from 'images/vinyl/text/services.svg'
import { ReactNode, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Overlay from './Overlay'

interface Props {
  children: ReactNode
}

const MENU = [
  {
    id: 1,
    label: 'équipe',
    url: '/team',
    delayIn: 'delay-300',
    delayOut: 'delay-600',
    vinylText: teamVinylText,
  },
  {
    id: 2,
    label: 'services',
    url: '/services',
    delayIn: 'delay-400',
    delayOut: 'delay-700',
    vinylText: servicesVinylText,
  },
  {
    id: 3,
    label: 'réalisations',
    url: '/achievements',
    delayIn: 'delay-500',
    delayOut: 'delay-800',
    vinylText: achievementsVinylText,
  },
  {
    id: 4,
    label: 'blog',
    url: '/blog',
    delayIn: 'delay-600',
    delayOut: 'delay-900',
    vinylText: blogVinylText,
  },
  {
    id: 5,
    label: 'contact',
    url: '/contact',
    delayIn: 'delay-700',
    delayOut: 'delay-1000',
    vinylText: contactVinylText,
  },
]

function Layout({ children }: Props) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [vinylText, setVinylText] = useState(homeVinylText)

  return (
    <>
      <Overlay
        MENU={MENU}
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
        vinylText={vinylText}
        setVinylText={setVinylText}
      />
      <Header
        MENU={MENU}
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
