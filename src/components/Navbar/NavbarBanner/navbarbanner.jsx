import React from 'react'
import './navbarbanner.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';
const NavbarBanner = () => {
  return (
    <div className='navbar-banner'>

      <div className="menu">
        
        <div className="all">
          <MenuOutlinedIcon /> <span>All</span>
        </div>

        <div className="links">
          <Link to={'/products'} className='h4'>Today's Deals</Link>
          <Link to={'/products'} className='h4'>Best Seller</Link>
          <Link to={'/products'} className='h4'>Electronics</Link>
          <Link to={'/products'} className='h4'>Mobiles</Link>
          <Link to={'/products'} className='h4'>Earphones</Link>
          <Link to={'/products'} className='h4'>Speakers</Link>
        </div>

      </div>

    </div>


  )
}

export default NavbarBanner