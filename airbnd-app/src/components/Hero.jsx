import React from 'react'
import group77 from '../assets/images/Group 77.png'
// import personImg from '../assets/images/image 12.png'
import Card from './Card'
import data from '../data.js'

function Hero() {
    const cards = data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    }) 

  return (
    <main>
        <section className="hero">
            <div className="wrapper hero-grid">
                <div className="hero-img">
                    <img className="group7" src={group77} alt="" />
                </div>
                <div className="hero-texts">
                    <h1>Online Experiences</h1>
                    <p>
                        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                    </p>
                </div>
            </div>
        </section>
        <div className="card-flex">
            {cards}
        </div>
    </main>
  )
}

export default Hero