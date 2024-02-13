import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these amazing destinations and enjoy the fun in it</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-ul'>
                < CardItem 
                src="images/home6.jpg"
                text="Eplore more hidden fun"
                label="Adventure"
                path="/services"
                />
                < CardItem 
                src="images/home4.jpg"
                text="Visit more places to see the World's beauty"
                label="Visit"
                path="/services"
                />
            </ul>
            <ul className='cards-ul'>
                < CardItem 
                src="images/home1.jpg"
                text="Eplore more hidden fun"
                label="Adventure"
                path="/services"
                />
                < CardItem 
                src="images/home2.jpg"
                text="Visit more places to see the World's beauty"
                label="Visit"
                path="/services"
                />
                < CardItem 
                src="images/home7.jpg"
                text="Visit more places to see the World's beauty"
                label="Visit"
                path="/services"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
