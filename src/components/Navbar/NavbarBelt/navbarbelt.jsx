import React from 'react'
import './navbarbelt.css'
import logo from '../../../assets/amazon.png'
import Flag from '../../../assets/flag.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const NavbarBelt = () => {
    const cartItems = useSelector((state) => state.cart.items);


    return (
        <div className='navbar-belt'>


            <div className="navbar-belt-left">

                <div className="left-logo">
                <Link to="/"><img className='amazon-logo' src={logo} alt="amazonlogo" /></Link>
                </div>

                <div className="navbarbeltlocation">
                    <div className="navbarbeltlocationImg">
                        <LocationOnOutlinedIcon className='locationImg' sx={{ fontSize: "20px" }} />
                    </div>
                    <div className="navbarbeltlocationplace">
                        <div className="navbarbeltlocationtop">Delivering to</div>
                        <div className="navbarbeltlocationbottom">Lahore 54000</div>
                    </div>
                </div>

            </div>


            <div className="navbarBeltSearchBox">
                <div className="navbarBeltSearchDiv">
                    <div className="navbarBeltSearchBoxAll">
                        <div className="navbarBeltSearchBoxAllText">All</div>
                        <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
                    </div>
                    <input type="text" className='navbarBeltInputSearchBox' placeholder='Search Amazon.pk' />
                    <div className="searchIconNavbarBelt">
                        <SearchIcon sx={{ fontSize: "20px" }} className='searchIcon'/>
                    </div>
                </div>
            </div>


            <div className="right-navbar-belt">

                <div className="pkFlag">
                    <img src={Flag} alt="palestine" className='flag' />
                    <span className='lang'>EN</span>
                    <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px"}} />
                </div>

                <div className="navbarbeltSignInPlace">
                        <div className="navbarbeltSignIn">Hello, sign in</div>
                        <div className="navbarbeltSignInbottom">Account & Lists</div>
                    </div>

                    <div className="navbarbeltReturnsPlace">
                        <div className="navbarbeltReturns">Returns</div>
                        <div className="navbarbeltReturnsbottom">& Orders</div>
                    </div>

                    <Link to={'/cart'} className="navbarbeltCartPlace">
                        <span className='cartItem'>{cartItems.length}</span>
                        <div>
                            <ShoppingCartOutlinedIcon />
                           <span className='cartTitle'>Cart</span>
                        
                        </div>
                    </Link>
            </div>


        </div>
    )
}

export default NavbarBelt