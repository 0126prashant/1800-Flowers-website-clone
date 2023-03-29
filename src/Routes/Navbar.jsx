import React from 'react'
import { Link } from "react-router-dom";
import "../css/Navbar.css"
// import logo from "../images/logo.png"

function Navbar() {
  return (
    <>
   <nav className='container'>
   <h1 id='hello'>Logo</h1>
    {/* <img src={logo} alt="picture"/> */}
    <div id='search_nav'>
    <input placeholder='What are you looking for?'/>
    <button>SEARCH</button>
    </div>
    <div className='nav_login_logos' style={{display:"flex"}}>
    <div>
    <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg'/>
      <Link to="/login"><span>name</span></Link>

      </div>
    <div>
      <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44'/>
      <span>My Orders</span>
      </div>
      <div>
      <img src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44'/>
      <Link to="/cart"><span>cart</span></Link>
    </div>
    </div>
    </nav>
    {/* <div className='megaMenu'>
       <ul>
        <li>
          <Link to="/"></Link>
          <ul>
            <li><Link to="/submenu1">Submenu Item 1</Link></li>
            <li><Link to="/submenu2">Submenu Item 2</Link></li>
            <li><Link to="/submenu3">Submenu Item 3</Link></li>
          </ul>
        </li>
       </ul>
    </div> */}
    </>
  )
}

export default Navbar