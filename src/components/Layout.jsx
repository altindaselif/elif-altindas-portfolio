import { Outlet } from 'react-router-dom'
import Masthead from './Masthead.jsx'
import SiteFooter from './SiteFooter.jsx'

export default function Layout() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Masthead />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
