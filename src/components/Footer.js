import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <footer className="page-footer">
        <div>
        <ul className="social">
        <li><span className="material-icons"><FacebookIcon/></span> Facebook</li>
        <li><span className="material-icons"><InstagramIcon/></span> Instagram</li>
        <li><span className="material-icons"><TwitterIcon/></span> Twitter</li>
        </ul>
         <nav aria-label="Legal" className="foot-nav">
        <ul className="legal">
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Accessibility Policy</a></li>
        </ul>
      </nav>
      <p>Copyright {(new Date()).getFullYear()}<sup>&copy;</sup></p>
        </div>  
        </footer>
    )
}

export default Footer