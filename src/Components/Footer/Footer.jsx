import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import github_logo from '../../assets/github.png'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.png'

const Footer = () => {
    return (
        <div className='footer'>

            <div className="footer-tittle">
                <img src={user_icon} alt="" />
                <h2>Sisubalan S</h2>
                <p>Connect with Me</p>
            </div>

            <div className="footer-logos">
                <a href="https://github.com/Sisubalan" target='_blank'><img src={github_logo} alt="" /><p>Github</p></a>
                <a href="tel:+919791239674" target='_blank'><img src={call_icon} alt="" /><p>Phone</p></a>
                <a href="mailto:sisusisu830@gmail.com.com" target='_blank'><img src={mail_icon} alt="" /><p>Mail</p></a>
                <a href="https://www.linkedin.com/in/sisubalan-s-b70184274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src={linkedin_icon} alt="" /><p>Linked In</p></a>
            </div>

            <div className="footer-desc">
                <p>Elevating the Digital Experience!</p>
            </div>

            <p>....</p>
        </div>
    )
}

export default Footer
