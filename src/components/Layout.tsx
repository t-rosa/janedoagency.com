import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <div>overlay</div>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </>
  )
}

export default Layout
