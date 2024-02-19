import { Container, Row, Col } from 'react-bootstrap'
import {
  AiFillInstagram,
} from "react-icons/ai";
import imagedeveloper from "../Assets/imagedeveloper.png"
import "../pages/style.css";
import React from 'react';
import { FaFacebook } from 'react-icons/fa';



function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Mi portafolio <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Ivonne Jacome</h2>
            <p className='aboutdetails' >Pertenezco a la Universidad de las Fuerzas Armadas ESPE</p>
            <p className='aboutdetails'>Estudio Ingenieria en Tecnologias de la Informacion</p>
            <p className='aboutdetails'>Tengo 24 años</p>
            <p className='aboutdetails'>Vivo al Sur de Quito</p>
            <span></span>
            <button onClick={() => {
              window.open("https://www.facebook.com/jacome.ivonne.9");
            }}
              className='socailmediabtn'><FaFacebook className='icon' /></button>

            <button onClick={() => {
              window.open("https://www.instagram.com/ivonne.alexandra08/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
              <img src={imagedeveloper} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home