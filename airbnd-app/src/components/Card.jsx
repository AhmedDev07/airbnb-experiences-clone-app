import React from 'react'
import personImg from '../assets/image 12.png'
import itemStart from '../assets/Star 1.png'

function Card() {
  return (
    <section className="card">
        <div className="card-flex card-wrapper">
            
            <div className="card-item">
                <img src={personImg}/>
                <div className="card-texts">
                    <span>
                        <img src={itemStart} alt="" />
                        5.0<span className='contury'>(6).USA</span>
                    </span>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><strong className='price'>From $136</strong> / person</p>
                </div>
            </div>

            <div className="card-item">
                <img src={personImg}/>
                <div className="card-texts">
                    <span>
                        <img src={itemStart} alt="" />
                        5.0<span className='contury'>(6).USA</span>
                    </span>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><strong className='price'>From $136</strong> / person</p>
                </div>
            </div>

            <div className="card-item">
                <img src={personImg}/>
                <div className="card-texts">
                    <span>
                        <img src={itemStart} alt="" />
                        5.0<span className='contury'>(6).USA</span>
                    </span>
                    <p>Life lessons with Katie Zaferes</p>
                    <p><strong className='price'>From $136</strong> / person</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Card