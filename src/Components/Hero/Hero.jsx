import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import img from '../../assets/sisu-img.jpg'
import myimg from '../../assets/myimg.jpg'
import Typewriter from 'typewriter-effect';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={myimg} alt="" />
      <h1>I'm SisuBalan.S</h1>

      <h2>
        <Typewriter 
        options={{
          strings: ["Web Developer", "Front End Developer", "React JS Developer"],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 30
        }}></Typewriter>
      </h2>

      <p>A Skilled React developer with a strong portfolio, passionate about staying updated on frontend tech. Collabrative and commited to quality, you thrive in dynamic teams. Eager to contribute creativity and bring innovative ideas to life.</p>
      <div className='hero-action'>
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={10} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume"><a href={resume} download>My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
