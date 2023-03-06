import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import HawkLogo from "../IMG/HawkLogo.png"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div className='Navbar'>
        <div className={showMediaIcons ? "navitems-ham": "navitems"}>
          <div className="logo">
            <img src={HawkLogo} alt="" />
          </div>
          <Link className='navcontains' to="/">Getting Started</Link>
          <Link className='navcontains' to="/containers">Containers</Link>
          <Link className='navcontains' to="/formstables">Forms and Tables</Link>
          <Link className='navcontains' to="/cards">Cards</Link>
          <Link className='navcontains' to="/buttons">Buttons</Link>
          <Link className='navcontains' to="/classes">Classes</Link>
        </div>
        <i className="fa-solid fa-bars ham" onClick={() => setShowMediaIcons(!showMediaIcons)}></i>
      </div>
    </>
  )
}

export default Navbar
