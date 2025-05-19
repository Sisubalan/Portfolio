import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import projects_data from '../../assets/projects_data'
import edusityimg from '../../assets/edusity.jpg'
import greendenimg from '../../assets/greenden.jpg'
import udemyimg from '../../assets/udemy.jpg'
import actodoimg from '../../assets/actodo.jpg'
import nostraimg from '../../assets/nostra.jpg'
import image_gallery from '../../assets/image-gallery.jpeg'

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className="projects-tittle">
                <h1>Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="project_desc">
                <p>I have worked on a wide range of projects. From websites to web apps. Here are some of my projects.</p>
            </div>
            
            <div className="projects-container">

                <a href="https://edusity-college-website.vercel.app/" target='_blank'>
                <div className="project-data">
                    <img src={edusityimg}></img>
                    <button>HTML</button><button>CSS</button><button>React JS</button>
                    <h3>Edusity-College Website</h3>
                    <p>Edusity is a modern college website offering courses, admissions, campus news, and student support services.</p>
                </div>
                </a>

                <a href=" https://sisubalan.github.io/Greenden-tailwind/" target='_blank'>
                    <div className="project-data">
                        <img src={greendenimg} alt="" />
                        <button>HTML</button><button>Tailwind CSS</button><button>JavaScript</button>
                        <h3>Greenden-Plant Shop Website</h3>
                        <p>Greenden is a vibrant plant shop website offering indoor, outdoor plants, gardening tools, and expert tips.</p>
                    </div>
                </a>

                <a href="https://udemy-react-ruddy.vercel.app/" target='_blank'>
                    <div className="project-data">
                        <img src={udemyimg} alt="" />
                        <button>HTML</button><button>CSS</button><button>React JS</button>
                        <h3>Udemy-Education Platform</h3>
                        <p>Udemy is an online education platform offering diverse courses, expert instructors, and flexible learning anytime, anywhere.</p>
                    </div>
                </a>

                <a href="https://actodo-jade.vercel.app/" target='_blank'>
                    <div className="project-data">
                        <img src={actodoimg} alt="" />
                        <button>HTML</button><button>Tailwind CSS</button><button>React JS</button>
                        <h3>Actodo-Daily Task Website</h3>
                        <p>Actodo is a daily task management website helping users organize, prioritize, and complete tasks efficiently.</p>
                    </div>
                </a>

                <a href="https://sisubalan.github.io/Nostra-E-Commerce/" target='_blank'>
                    <div className="project-data">
                        <img src={nostraimg} alt="" />
                        <button>HTML</button><button>CSS</button><button>JavaScript</button>
                        <h3>Nostra-Ecommerce Website</h3>
                        <p>Nostra is a sleek eCommerce website offering trendy fashion, fast delivery, secure payments, and great deals.</p>
                    </div>
                </a>

                <a href="https://image-gallery-react-lac-phi.vercel.app/" target='_blank'>
                    <div className="project-data">
                        <img src={image_gallery} alt="" />
                        <button>HTML</button><button>CSS</button><button>React JS</button>
                        <h3>Vintage Cars Gallery</h3>
                        <p>Explore timeless elegance at our vintage cars gallery, showcasing classic automobiles with history and style of cars.</p>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Projects
