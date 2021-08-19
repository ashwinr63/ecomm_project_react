import React from 'react'
import logo from '../img/Logo.png'
import Image from 'components/Image'
import {FavoriteBorderIcon} from '@material-ui/icons/'

const Header = () => {
    return (
      <>
      <header className="page-header">
      <div className="logo">
        <a href="#" className="logo"><Image src={logo} alt={Local} /></a>
        {/* <!-- Site logo --></a> */}
      </div>
      {/* <!-- Navigation menu and toggle button (non-functional) --> */}
     
        <button type="button" className="nav-toggle active">
          <img src={"./img/menu_black_24dp.svg"} alt="menu-bar"/></button>
      {/* <!-- Navigation Menu --> */}
      <nav aria-label="Primary" className="navigation">
        <ul className="menu">
          <li><a href="#">Shop Cars</a>
            <ul className="submenu">
              <li><a href="#">Low</a></li>
              <li><a href="#">Mid</a></li>
              <li><a href="#">High</a></li>
            </ul>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="search-product"/>
      {/* <!-- Search htmlFor a product (non-functional) --> */}
      <form className="search">
        <label>
          <input type="search" name="find" id="find" placeholder="Find"/>
        </label>
        <button type="button" img src={"./img/search_black_24dp.svg"} alt="search-outline" />
      </form>
        {/* <!-- Additional links --> */}
        <ul className="your-products">
          <li><a href="#"><span className="material-icons" aria-label="Favourites" id='favourites'><FavoriteBorderIcon /></span></a></li>
        <li><a href="#"><span className="material-icons" aria-label="Items in your cart" id='items'>shopping_cart</span></a></li>
        <li><a href="#"><span className="material-icons" aria-label="user account" id="account">account_circle</span></a></li>
        </ul>
        </header>
      </>
    )
}

export default Header