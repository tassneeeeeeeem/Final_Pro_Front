import React, { useState } from "react"
import'./Navbar.css'
import { assets } from "../../assets/assets"

const Navbar = () => {
    const [menu,setMenu]=useState("Home");
  return (
    <div className="navbar">
      <img className={"logo"} src ={ assets.logo} alt=""/>
      <ul className="navbar-menu">
        <li onClick={ ()=> setMenu("Home")}       className={menu==="Home"?"active":""}> Home</li>
        <li onClick={ ()=> setMenu("Categories")} className={menu==="Categories"?"active":""}>Categories</li>
        <li onClick={ ()=> setMenu("About Us")}   className={menu==="About Us"?"active":""}>About Us</li>
        <li onClick={ ()=> setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us </li>
      </ul>
      
      <div className="navbar-right">
      <button className=" sign-in-button"> Sign In</button>
      
        
        <div className="navbar-SearchIcon">
          <img src={assets.SearchIcon} alt="" />
        </div>  
          <div className="navbar-SearchIcon">
              <img src= {assets.CartIcon} alt=""/>
              <div className="dot"></div>
          </div>
      </div>  
    </div>
    
  )
}

export default Navbar

