import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    //To get every current year
    const year = new Date().getFullYear();

  return (
    <div className='footer-container'>
      <section className='footer-sub'>
        <p className='footer-sub-heading'>
            Join Our Newsletter and get Daily Updates
        </p>
        <p className='footer-sub-text'>
            You can unsubscribe at anytime
        </p>
        <div className='input-areas'>
            <form className='footer-email-form'>
                <input type='email' name='email' placeholder='Enter Email' className='footer-input'>
                </input>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Career</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Services</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Visit Us</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Sponsorships</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Gallery</h2>
                <Link to='/'>Projects</Link>
                <Link to='/'>Clients</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencers</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Social Media Pages</h2>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter(X) </Link>
            </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                JourneyHub <i className="fa-solid fa-plane-departure" />
                </Link>
            </div>
            <small className='copy-rights'>JourneyHub &copy; {year} - Designed by EsmondTechnologies </small>
            <div className='social-icons'>
                <Link
                className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-lablel='Facebook'
                >
                    <i class="fa-brands fa-facebook"></i>
                </Link>
                <Link
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-lablel='Instagram'
                >
                    <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-lablel='Youtube'
                >
                    <i class="fa-brands fa-youtube"></i>
                </Link>
                <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-lablel='Twitter'
                >
                    <i class="fa-brands fa-twitter"></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
