import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import './Menu.css'
import Home from '../RoutingComponents/Home/Home'
import About from '../RoutingComponents/About/About'
import Contact from '../RoutingComponents/Contact/Contact'
const Menu = () => {
  return (
    <div>
    <ul className='menu'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="about">About</Link></li>
    </ul>
<Routes>
<Route path="/home" element={<Home/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/about" element={<About/>}></Route>
</Routes>
    </div>
  )
}

export default Menu
