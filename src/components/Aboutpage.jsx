import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import AboutImage from "../Assets/AboutImage.png"

import "../pages/style.css";


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Proyectos<span></span></h3>
                        <p className='aboutdetails'>
                            La Universidad de las Fuerzas Armadas ESPE no solo me brinda una educación de calidad, sino también la oportunidad de fusionar mis intereses personales con la formación académica, creando así una experiencia integral y enriquecedora.
                        </p>

                        <ul className='aboutdetails'>
                            <li>Desarrollo de Aplicaciones Web: Considerar crear aplicaciones interactivas utilizando tecnologías como React, Angular o Vue.js.</li>
                            <li>Proyecto de Redes: Trabajar en la implementación y optimización de una red local, configuración de equipos de red o seguridad informática.</li>
                            <li>Participación en Proyectos de Código Abierto: Contribuir a proyectos de código abierto relacionados con mis habilidades y intereses.</li>
                        </ul>

                        Cursos Relevantes:
                        <ul>
                            <li>
                                <strong>Cisco Networking Essentials (Feb 2023):</strong> Una experiencia enriquecedora que me proporcionó un profundo conocimiento sobre los principios fundamentales de las redes de datos y comunicaciones, preparándome para sobresalir en el campo de las tecnologías de la información y las comunicaciones.
                            </li>
                            <li>
                                <strong>CertiProf Professional Knowledge Business Intelligence Foundation Professional Certification BIFPC (Jul 2023):</strong> Este programa de certificación me proporcionó un conocimiento profundo de los conceptos fundamentales de la inteligencia de negocios, incluyendo la recopilación, transformación y visualización de datos, la creación de paneles de control interactivos y el análisis de datos para identificar tendencias y oportunidades clave.
                            </li>
                        </ul>

                        Habilidades Destacadas:
                        <ul>
                            <li>Networking</li>
                            <li>Base de Datos</li>
                            <li>Ofimática</li>
                            <li>Diseño Web</li>
                        </ul>

                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={100}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="right"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="webimage">
                            <img src={AboutImage} alt="" srcset="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage