import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <div className="footer-container">
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
               <p className="fopa">Amana</p>
            </Link>
          </div>
          <small class='website-rights'>Amana Association © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='amaanaassociation12@gmail.com'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-google' />
            </a>
            
            
            
            
            {/*<Link to="https://www.vecteezy.com/free-vector/green-background">Green Background Vectors by Vecteezy</Link>*/}
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer
