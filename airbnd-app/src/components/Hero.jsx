import React from 'react'
import group77 from '../assets/Group 77.png'
import Card from './Card'

function Hero() {
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
        <Card/>
    </main>
  )
}

export default Hero