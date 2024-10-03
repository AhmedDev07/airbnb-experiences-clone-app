import React from 'react'
import personImg from '../assets/images/mountain-bike 1.png'
import itemStart from '../assets/images/Star 1.png'


function Card(props) {
  return (
    <section className="card">
        <div className="card-flex card-wrapper">
            
            <div className="card-item">
               <img src={personImg} alt="person" />
                <div className="card-texts">
                    <span>
                        <img src={itemStart} alt="" />
                        {props.rating}<span className='contury'>({props.reviewCount}).{props.country}</span>
                    </span>
                    <p>{props.title}</p>
                    <p><strong className='price'>From ${props.price}</strong> / person</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Card