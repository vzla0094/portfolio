import React, { Component } from "react";
class SectionThree extends Component {
  state = {};
  render() {
    return (
      <div className="sectionThree">
        <div className="sectionThree__boxes">
          <div className="sectionThree__boxes__loQueHago">
            <h2 className="sectionThree__boxes__loQueHago__title">
              Lo que hago
            </h2>
            <div className="sectionThree__boxes__loQueHago__box">
              <p>
                Diseño
                <br />
                Desarrollo Web (front)
              </p>
            </div>
          </div>
          <div className="sectionThree__boxes__miMision">
            <h2 className="sectionThree__boxes__miMision__title">Mi misión</h2>
            <div className="sectionThree__boxes__miMision__box" />
          </div>
          <div className="sectionThree__boxes__acercaDeMi">
            <h2 className="sectionThree__boxes__acercaDeMi__title">
              Acerca de mi
            </h2>
            <div className="sectionThree__boxes__acercaDeMi__box">
              <p>
                En 2017 me propuse cambiar mi carrera a desarrollo web, y hasta
                la fecha he estado estudiando y trabajando duro para ofrecer el
                mejor servicio posible en soluciones web. <br />
                <br />
                Me gusta tener siempre nuevos retos que solucionar, y estar
                aprendiendo algo nuevo constantemente, éstas fueron las
                principales razones por las que decidí convertirme en
                desarrollador. Acerca de mi forma de trabajar puedo decir que
                suelo poner mucha atención hasta los detalles más mínimos, y
                busco la manera de trabajar de la manera más metódica y
                organizada posible.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThree;
