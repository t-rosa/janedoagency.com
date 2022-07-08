import Image from 'next/future/image'
import { ReactNode, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Overlay from './Overlay'
import backgroundPattern from 'images/background-pattern.jpeg'
interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Modal />
      <Overlay />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
