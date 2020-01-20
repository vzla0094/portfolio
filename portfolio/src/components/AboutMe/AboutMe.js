import React, { Component } from "react";
import arrow from "../../img/scroll.png";
import { MDBAnimation, MDBContainer } from "mdbreact";
import { Link } from "react-scroll";
class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="sectionThree" id="sectionThree">
        <MDBContainer className="sectionThree__acercaDeMi">
          <h2 className="sectionThree__acercaDeMi__title">Acerca de mi:</h2>
          <div className="sectionThree__acercaDeMi__box">
            <p>
              Hola, soy Desarrollador Web autodidacta con poco más de un año de
              experiencia en proyectos propios. Mi anterior experiencia es en la
              industria de manufactura donde trabajé como Técnico e Ingeniero
              Jr. En el área de Calidad. <br />
              <br />
              He decidido cambiar de profesión porque me gusta mucho la
              programación y es hacia donde quiero impulsar mi carrera. Hoy en
              día programo en mis ratos libres mientras trabajo en un pequeño
              negocio familiar y busco la oportunidad de trabajar como
              desarrollador jr.
              <br />
              <br /> Me alegra que haya revisado mis proyectos, si desea saber
              más acerca de ellos o le gustaría trabajar conmigo estoy a sus
              órdenes. Mi teléfono es 6311054619 y mi correo vzla0094@gmail.com.
              También agradezco con todo gusto cualquier retroalimentación
              acerca del sitio y los proyectos. <br />
              <br />
              Eliezer Valenzuela.
            </p>
          </div>
        </MDBContainer>
        <div className="sectionThree__arrow flex-center">
          <Link
            className="navbar__links"
            to="sectionFour"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <MDBAnimation type="slideInDown" infinite duration="2s" delay="1s">
              <img src={arrow} width="30" height="30" alt="arrow" />
            </MDBAnimation>
          </Link>
        </div>
      </div>
    );
  }
}

export default AboutMe;
