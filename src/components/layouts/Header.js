import React, {useEffect, useState}from 'react'
import './Header.css'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import{ MdOutlineShoppingCart, MdOutlineLocationOn } from 'react-icons/md'
import { useStateValue } from '../../context/StateProvider'
import { getAuth, signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
const Header = () => {
  const[{ cart, user, profile}, dispatch] = useStateValue()
    const [address, setAddress] = useState('')

    const isSignedIn = (e) =>{
      e.preventDefault()
      const auth = getAuth()
      if (user)
     signOut(auth).then(() =>{
       toast.success(`Signed out`)
     }).catch((e) =>{
       console.log(e.message);
     })
    }
    useEffect(() => {
        const URL = 'https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91';
        fetch(URL)
          .then(res => res.json())
          .then(data => setAddress(data));
    
      }, [])
    return (
        <nav>
        <div className='header'>
          <Link to="/">
            <img className='header-logo' src='/images/amazonHeader.png' alt='logo'/>
            </Link>
            <div className='header-search'>
                <input className='search-input' type='text'/>
               <FaSearch
               className='search-icon'/>
            </div>

            <img className="header-flag" src='/images/flagNigeria.jpg' alt='flag'></img>

            <div className='header-nav'>
           
                <div className='nav-optionsLogin' onClick={isSignedIn}> 
                <Link to={!user && "/login"} className="header-link">
                   <span className='navOption-1'>Hello {user? profile?.userName: "Guest"}</span>  
                   <span className='navOption-2'>{user ? 
                   "Sign Out": "Sign In"}</span>
                </Link>   
                </div>
           
                <div className='nav-optionsOrder'>
                <span className='navOption-1'>Returns</span>  
                <span className='navOption-2'>& Orders</span>
                </div>
                <div className='nav-optionsPrime'>
                <span className='navOption-1'>Your</span> 
                 <span className='navOption-2'>Prime</span>
                </div>
                <div className='header-cart'>
                <Link to="/cart">
                <MdOutlineShoppingCart/>
                <sup className='navOption2 cart-count'>{cart?.length}</sup>
                </Link>
                </div>
               
                
            </div>
        </div>
        <div className="header-bottom">
        {/* Address */}
        <div className="header-address">
          <div className="header-addressIcon">
            <MdOutlineLocationOn />
          </div>
          <div className="nav-optionsLoc">
            <span className="navOption-1">Deliver to {address?.city}({address?.country_code})</span>

          </div>
        </div>
        {/* Nav */}
        <div className="bottom-nav">
          <span>
           
              All Products
            
          </span>
          <span>Mobile</span>
          <span>Best Sellers</span>
          <span>Today's Deak</span>
          <span>Prime</span>
          <span>Computers</span>
          <span>Pantry</span>
          <span>Electronics</span>
          {/*

          <span>Books</span>
          <span>New Release</span>
          <span>Gift Ideas</span>
          <span>Customer Service</span>
          <span>Fashion</span>
          <span>Amazon Pay</span>
          */}
        </div>
        {/* Advt */}
        <div className="headerBottom-app">
          <img
            className="headerBottom-image"
            alt="Amazon App"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"
          />
        </div>
      </div>
        </nav>
    )
}

export default Header
