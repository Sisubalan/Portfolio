import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" /> */}
      <h1>Portfolio</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' offset={90} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:""}</li>
        <li><AnchorLink className='anchor-link' offset={70} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:""}</li>
        <li><AnchorLink className='anchor-link' offset={70} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<img src={underline} alt=''/>:""}</li>
        <li><AnchorLink className='anchor-link' offset={70} href='#education'><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu==="education"?<img src={underline} alt=''/>:""}</li>
        <li><AnchorLink className='anchor-link' offset={40} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:""}</li>
        <li className='github'><a href="https://github.com/Sisubalan" target='_blank'>GitHub</a></li>
      </ul>
      
      <a href="https://github.com/Sisubalan" target='_blank'><div className="nav-connect">GitHub</div></a>

    </div>
  )
}

export default Navbar
