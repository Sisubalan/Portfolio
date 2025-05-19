import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import myimg from '../../assets/myimg.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-tittle">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    {/* <img src={profile_img} alt="" /> */}
                    <img src={myimg} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Driven and detail-oriented Front-End Web Developer with a
                            strong foundation in HTML, CSS, JavaScript, Tailwind CSS,
                            and React.js. Eager to apply my skills and collaborate with
                            dynamic team to contribute to the success and growth of
                            the company.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "320px" }} /></div>
                        <div className="about-skill"><p>Tailwind CSS</p><hr style={{ width: "280px" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "310px" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "270px" }} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
