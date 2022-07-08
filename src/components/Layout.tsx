import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Overlay from './Overlay'
interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Modal />
      <Overlay />
      <Header />
      <div className='bg-[url("/main-pattern.webp")]'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
