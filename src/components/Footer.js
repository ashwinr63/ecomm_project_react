import React from 'react'

const Footer = () => {
    return (
        <>
        <footer className="page-footer">
        <div>
        <ul className="social">
        <li><a href="#"><span className="material-icons">face</span> Facebook</a></li>
        <li><a href="#"><span className="material-icons">camera_alt</span> Instagram</a></li>
        <li><a href="#"><span className="material-icons">alternate_email</span> Twitter</a></li>
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
        </>
    )
}

export default Footer