import React from 'react';
import { Button } from './Button';
import './Hero.css';
import '../App.css';


function Hero() {
  return (
    <>
    <div 
    className="hero-container"
        style={{
            backgroundImage: 'url("images/banner.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
        }}
    >
        {/* <video src='videos/vid1.mp4' autoPlay loop muted /> */}
        <h1>ADVENTURE AWAITS YOU.</h1>
        <p>Come have the greatest fun of your life</p>
        <div className='hero-btns'>
            <Button className='btn btn1' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
            GET STARTED
            </Button>
            <Button className='btn btn2' 
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
            WATCH MORE <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
    </>
  )
}

export default Hero
