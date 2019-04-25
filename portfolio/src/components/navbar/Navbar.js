import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    const handleDropdown = () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("navbar--responsive");

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
        <nav className="navbar">
          <div className="navbar__logo">
            <a to="/dashboard" className="navbar__logo__link" href="#">
              <p className="navbar__logo__link__name">Eliezer Valenzuela</p>
              <p className="navbar__logo__link__profession">
                Desarrollador Web
              </p>
            </a>
          </div>
          <div className="navbar__collapse--items">
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
                <a to="/home" className="listedItems__item__link" href="#">
                  Inicio
                </a>
              </li>
              <li className="listedItems__item">
                <a
                  to="/teachersearch"
                  className="listedItems__item__link"
                  href="#"
                >
                  Portafolio
                </a>
              </li>
              <li className="listedItems__item">
                <a to="/search" className="listedItems__item__link" href="#">
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

export default Navbar;
