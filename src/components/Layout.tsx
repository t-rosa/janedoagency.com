import clsx from 'clsx'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Overlay from './Overlay'
interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('-translate-x-full opacity-0')
  useEffect(() => {
    setTransitionStage('translate-x-0 opacity-100')
  }, [])

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('-translate-x-full opacity-0')
    }
  }, [children, setDisplayChildren, displayChildren])
  return (
    <>
      <Modal />
      <Overlay />
      <Header />
      <div
        onTransitionEnd={() => {
          if (transitionStage === '-translate-x-full opacity-0') {
            setDisplayChildren(children)
            setTransitionStage('translate-x-0 opacity-100')
          }
        }}
        className={clsx(transitionStage, 'bg-zinc-900 mix-blend-lighten duration-700 ease-in-out')}
      >
        <div>{displayChildren}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
