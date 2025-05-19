import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "aaaa6489-576a-4952-bf8a-1d52e1c9e479");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };


    return (
        <div id='contact' className='contact'>
            <div className="contact-tittle">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Feel free to reach out to me for any questions or opportunities!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>sisusisu830@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+91 9791239674</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Avinashi, Tiruppur</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter Your Name' name='name' />
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter your Email' name='email' />
                        <label htmlFor="">Write Your Message Here</label>
                        <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                        <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
                
            </div>
        </div>
    )
}

export default Contact
