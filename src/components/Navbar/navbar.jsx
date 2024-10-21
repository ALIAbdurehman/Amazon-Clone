import React from 'react'
import NavbarBelt from './NavbarBelt/navbarbelt.jsx'
import NavbarBanner from './NavbarBanner/navbarbanner.jsx'
import ComingSoon from './ComingSoon/soon.jsx'
import './navbar.css'


const Navbar = () => {

  return (
    <div className='navbar'>
      <ComingSoon />
      <NavbarBelt />
      <NavbarBanner />
    </div>
  )
}

export default Navbar