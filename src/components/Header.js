import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../img/Logo.png'
import Image from 'components/Image'
import MenuImg from '../img/menu_black_24dp.svg'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    return (
      <>
      <header className="page-header">
      <div className="logo">
        <a href="#" className="logo"><Image src={logo} alt="" /></a>
        {/* <!-- Site logo --></a> */}
      </div>
      {/* <!-- Navigation menu and toggle button (non-functional) --> */}
     
        <button type="button" className="nav-toggle active">
          <img src={MenuImg} alt="menu-bar"/></button>
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
        <li><Link to='/FavPage'><span><FavoriteRoundedIcon /></span></Link></li>
        <li><Link to='/CartPage'><span><ShoppingCartRoundedIcon /></span></Link></li>
        <li><Link to='/AccountPage'><span><AccountCircleIcon /></span></Link></li>
        </ul>
        </header>
      </>
    )
}

export default Header