import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Education = () => {
    return (
        <div id='education' className='education'>
            <div className="education-tittle">
                <h1>Education</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="education_desc">
                <p>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>
            </div>

            <div className="education-container">

                <div className="education-data">
                    <h1>Error Makes Clever (EMC)</h1>
                    <p>Front End Development Mastery along with react-js</p>
                    <p>2025</p>
                    <div className="education-data-desc">
                        <p>With a comprehensive front-end development course under my belt, I've cultivated expertise in HTML, CSS, and JavaScript. This educational journey has empowered me to craft visually captivating, responsive websites and dynamic web applications. Complementing this, I've refined my abilities through hands-on projects using React.js, a powerful tool for contemporary web development. These experiences have enriched my understanding of front-end development, igniting my passion to design user-centric and captivating digital solutions.</p>

                    </div>
                </div>

                <div className="education-data">
                    <h1>RVS College Of Engineering and Technology, Coimbatore</h1>
                    <p>Bachelor of Engineering - BE, Mechanical Engineering</p>
                    <p>2020-2024</p>
                    <div className="education-data-desc">
                        <h3>Grade:7.92 CGPA</h3>
                        <p>As a mechanical engineering graduate, I possess strong problem-solving and precision skills. Combining this foundation with my passion for technology, I'm venturing into IT. My college experience has equipped me to bridge the worlds of engineering and IT, applying efficiency and innovation to both realms, making me a versatile professional.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education
