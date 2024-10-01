import React from 'react'
import airbabLogo from '../assets/Vector.png'

function Header() {
  return (
    <header>
        <div className="wrapper h-flex">
            <img src={airbabLogo} width={130}/>
        </div>
    </header>
  )
}

export default Header