import React, { Component } from "react";
class NavigationBar extends Component {
  state = {};
  render() {
    const handleDropdown = () => {
      const navigationBar = document.querySelector(".navigationBar");
      navigationBar.classList.toggle("navigationBar--responsive");

      const listedItems = document.querySelector(".listedItems");
      listedItems.classList.toggle("listedItems--responsive");

      const listedItems__item__a = Array.from(
        document.querySelectorAll(".listedItems__item__a")
      );
      listedItems__item__a.map(e =>
        e.classList.toggle("listedItems__item__a--responsive")
      );

      const listedItems__item__btnLogout = document.querySelector(
        ".listedItems__item__btnLogout"
      );
      listedItems__item__btnLogout.classList.toggle(
        "listedItems__item__btnLogout--responsive"
      );
    };

    return (
      <>
        <nav className="navigationBar">
          <div className="navigationBar__logo">
            <a
              to="/dashboard"
              className="navigationBar__logo__link"
              href="#sectionOne"
            >
              <p className="navigationBar__logo__link__name">
                Eliezer Valenzuela
              </p>
              <p className="navigationBar__logo__link__profession">
                Desarrollador Web
              </p>
            </a>
          </div>
          <div className="navigationBar__collapse--items">
            <ul className="listedItems">
              <li className="listedItems__item">
                <button
                  className="listedItems__item__btnCollapse"
                  onClick={() => handleDropdown()}
                >
                  <i className="fas fa-bars" />
                </button>
              </li>
              <li className="listedItems__item">
                <a
                  to="/home"
                  className="listedItems__item__link"
                  href="#sectionOne"
                >
                  Inicio
                </a>
              </li>
              <li className="listedItems__item">
                <a
                  to="/teachersearch"
                  className="listedItems__item__link"
                  href="#sectionTwo"
                >
                  Portafolio
                </a>
              </li>
              <li className="listedItems__item">
                <a
                  to="/search"
                  className="listedItems__item__link"
                  href="#sectionThree"
                >
                  Acerca de mi
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <hr className="navBorder" />
      </>
    );
  }
}

export default NavigationBar;
