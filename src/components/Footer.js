import React from 'react'
import "./Footer.css"
import { Button } from './Button';
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
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-google' />
            </a>
            <a
              class='social-icon-link gmail'
              href='https://instagram.com/gokpusutakimi?utm_medium=copy_link'
              target='_blank'
              aria-label='Gmail'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com/channel/UCX-49bmcc_xlh9TGjuz1neg'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/gokpusu?s=08'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/company/gokpusu-takimi'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            {/*<Link to="https://www.vecteezy.com/free-vector/green-background">Green Background Vectors by Vecteezy</Link>*/}
          </div>
        </div>
      </section>
    </div>
    )
}

export default Footer
