import { Container } from "react-bootstrap";
import "../pages/style.css";
import { FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook } from 'react-icons/fa';

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Contacto</h2>
        <p className="contactpara">
          Para contacto, aquí te dejo un vistazo a mi trayectoria educativa y a algunas de las certificaciones que he obtenido en mi camino hacia la ingeniería en tecnologías de la información.

          <br /><br />
          Educación:
          <ul>
            <li><strong>Primaria:</strong> Escuela Fiscal Mixta 2 de Agosto</li>
            <li><strong>Secundaria:</strong> Colegio Simón Bolívar</li>
            <li><strong>Universidad:</strong> Universidad de las Fuerzas Armadas ESPE, donde actualmente estoy inmerso en el sexto semestre de la carrera de Ingeniería en Tecnologías de la Información.</li>
          </ul>

          Cursos Relevantes:
          <ul>
            <li>
              <strong>Cisco Networking Essentials (Feb 2023)</strong>
            </li>
            <li>
              <strong>CertiProf Professional Knowledge Business Intelligence Foundation Professional Certification BIFPC (Jul 2023) </strong>
            </li>
          </ul>
          <div className="contactInfo">
            <p>
              <FaPhone /> 0980414079
            </p>
            <p>
              <FaEnvelope /> ivonnejaco08@gmail.com
            </p>
          </div>
          <button onClick={() => {
            window.open("https://www.facebook.com/jacome.ivonne.9");
          }}
            className='socailmediabtn'><FaFacebook className='icon' /></button>

          <button onClick={() => {
            window.open("https://www.instagram.com/ivonne.alexandra08/");
          }}
            className='socailmediabtn'><AiFillInstagram className='icon' /></button>

          <button onClick={() => {
            window.open("mailto:ivonnejaco08@gmail.com");
          }} className='emailbtn'><FaEnvelope className='icon' /></button>


        </p>

      </Container>
    </div >
  );
}

export default Contactpage;