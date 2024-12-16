import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque hic pariatur odio nemo nulla quod? Unde hic minima repellendus. Nemo atque labore magni facere tempore autem, ipsam itaque veniam aperiam? </p>
          <div className="footer-social-icons">
            <img src={assets.FacebookIcon} alt="" />
            <img src={assets.InstagramIcon} alt="" />
            <img src={assets.Twittericon} alt="" />
            <img src={assets.WatsappIcon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2> Company </h2>
          <ul>
            <li> Home</li>
            <li>About Us </li>
            <li> Delivary </li>
            <li> Privacy Policy </li>
          </ul>

        </div>
        <div className="footer-conteny-right">
          <h2>  Get in touch </h2>
          <ul>
            <li> +20 0123456787</li>
            <li> contact@JustMarride.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyrigth">
        copyright 2024 @JustMarried.com -All Right Resetved. </p>
    </div>
  )
}

export default Footer
