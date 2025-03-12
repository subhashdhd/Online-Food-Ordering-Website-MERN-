import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt='' />
                    <p>To provide energy needed to keep the body breathing and alive, for movement and warmth, and for growth and repair of tissues</p>
                    <div className='footer-special-icons'>
                        <img src={assets.facebook_icon} alt=''/>
                        <img src={assets.twitter_icon} alt=''/>
                        <img src={assets.linkedin_icon} alt=''/>

                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About-us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 9353396029</li>
                    <li>subhud529@gmil.com</li>
                </ul>

                </div>
               
                
            </div>
            <hr/>
            <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Rights Reserved</p>

        </div>
    )
}

export default Footer
