import { Col, Container, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'
import { useState } from "react"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);
    const projects = [
        {
            name: 'ZFK-Veles',
            description: 'Website for female football club from Veles, Macedonia',
            languages: 'HTML, CSS, Bootstrap',
            link: 'https://stefanp91.github.io/ZFK-Veles-/',
            img: '/zfk-borec.png',
        },

        {
            name: 'Detect-ion',
            description: 'Landing page for Detect-ion',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://detect-ion-1.netlify.app',
            img: '/detect-ion.png',
        },

        {
            name: 'Digital Marketing',
            description: 'Web page for Creative Hub Kosovo',
            languages: 'HTML, CSS, Bootstrap',
            link: 'https://creativehubkos.com/digital-marketing/',
            img: '/digital-marketing.png',
        },

        {
            name: 'Tech Job Fair',
            description: 'Web page for Creative Hub Kosovo',
            languages: 'HTML, CSS, Bootstrap',
            link: 'https://creativehubkos.com/tech-job/',
            img: '/tech-job-fair.png',
        },

        {
            name: 'Cities',
            description: 'Web page for cities',
            languages: 'HTML, CSS, Bootstrap, JavaScript',
            link: 'https://worldwidecities.netlify.app',
            img: '/cities.png',
        },

        
    ]

    const[selectedProject, setSelectedProject] = useState(null);

    const handleClick = (projectName) => {
        const project = projects.find(p => p.name === projectName);
    
        setSelectedProject(project);

        selectedProject === project ? 'active' : '';
    }

    function Project({ project }) {
    
        return (
            <div className="project" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear">
                <img className="project-img" src={project.img} alt={project.name} />
                <div className="project-description">
                    <h2 className="project-title">{project.name}</h2>
                    <p>{project.description}</p>
                    <p> <span className="project-languages">Languages:</span> {project.languages}</p>
                    <a href={project.link} target="_blank">
                        <button className="project-btn">Visit</button>
                    </a>
                </div>
            </div>
        )
        
    }

    return (
        <>
            <div className="project-section" id="projects">
                <Container>
                    <h1 className="project-header">Projects</h1>
                    <Row>
                        <Col md={3}>
                            <div className="projects-left-side">

                                <ul className="project-list">
                                    {projects.map(project => 
                                    <li 
                                        key={project.name} 
                                        onClick={() => handleClick(project.name)}
                                        className={selectedProject?.name === project.name ? 'active' : ''}
                                        >
                                            {project.name}
                                    </li>
                                    )}
                                
                                </ul>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="projects-right-side">
                                {selectedProject ? (
                                    <Project project={selectedProject}  />
                                ) 
                                
                                : 
                                (
                                    <p className="project-right-side-intro-text">Select a project to see details</p>
                                )
                                }
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Projects