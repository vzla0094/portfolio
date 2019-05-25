import React, { Component } from "react";
import arrow from "../../img/scroll.png";
class SectionThree extends Component {
  state = {};
  render() {
    return (
      <div className="sectionThree" id="sectionThree">
        <div className="sectionThree__acercaDeMi">
          <h2 className="sectionThree__acercaDeMi__title">Acerca de mi:</h2>
          <div className="sectionThree__acercaDeMi__box">
            <p>
              En 2017 me propuse cambiar mi carrera a desarrollo web, y hasta la
              fecha he estado estudiando y trabajando duro para ofrecer el mejor
              servicio posible en soluciones web. <br />
              <br />
              Me gusta tener siempre nuevos retos que solucionar, y tener la
              oportunidad de aprender cosas nuevas todo el tiempo, estas fueron
              algunas de las razones por las que decidí convertirme en
              desarrollador. A la hora de trabajar, me gusta mucho ponerle
              atención especial a los detalles y hacer todo de la manera más
              metódica y organizada posible.
              <br />
              <br /> Me da mucho gusto que haya tenido la oportunidad de revisar
              mis proyectos, si desea saber más acerca de ellos, o le gustaría
              trabajar conmigo, no dude en contactarme!!
            </p>
          </div>
        </div>
        <a className="sectionThree__arrow" href="#sectionFour">
          <img src={arrow} width="50" height="50" alt="arrow" />
        </a>
      </div>
    );
  }
}

export default SectionThree;
