import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';



const Navbar = () => {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMenu = ()=>setClick(false);

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
}

useEffect(()=> {
    showButton();
}, [])

window.addEventListener('resize', showButton)



  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMenu}>
                 JourneyHub <i className="fa-solid fa-plane-departure" />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                {/* This line of code makes the menu bars to appear/disapper based on screen size  */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                    <li className='nav-item nav-link-text'>
                        <Link to='/' className='nav-links' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item nav-link-text'>
                        <Link to='/about' className='nav-links' onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item nav-link-text'>
                        <Link to='/services' className='nav-links' onClick={closeMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item nav-itembtn'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav> 
    </>
  )
}

export default Navbar
