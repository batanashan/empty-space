import React, { useState } from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import './Menu.css'
import Home from '../RoutingComponents/Home/Home'
import About from '../RoutingComponents/About/About'
import Contact from '../RoutingComponents/Contact/Contact'
const Menu = () => {
  const [isShow,setIsShow] = useState(document.body.clientWidth>700 ?false : true)
  const [left,setLeft] = useState(-150)
  const [clr,setClr] =useState("home")

  const fnResize =() =>{
    if(document.body.clientWidth<700){
    setIsShow(true)
    }
    else{
      setIsShow(false)
    }
  }
  window.addEventListener('resize',fnResize)
            const handleMobileBtnClick =() =>{
         setLeft(left === 0? -150 :0)
           }

           const fnMenuClick = (eve)=>{
            const {id} =eve.target
            eve.stopPropagation()
            setLeft(-150)
            setClr(id)
           }

  return (
    <div>
    { isShow && <button className='mobile-btn' onClick={handleMobileBtnClick}>
        <span></span>
        <span></span>
        <span></span>
        

      </button>
}
    <ul style ={{left}}  className={`${isShow? 'mobile-menu' : 'menu' }`}>
        <li ><Link to="/home" id="home" className={`${clr==="home"?'menuItem':''}`} onClick={fnMenuClick}>Home</Link></li>
        <li><Link to="/contact" id="contact" className={`${clr==="contact"?'menuItem':''}`}  onClick={fnMenuClick}>Contact</Link></li>
        <li><Link to="about"   id= "about"   className={`${clr==="about"?'menuItem':''}`} onClick={fnMenuClick}>About</Link></li>
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
