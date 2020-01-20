import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { Link } from "react-scroll";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <MDBNavbar
          className="navbar"
          fixed="top"
          color="white"
          light
          expand="md"
        >
          <MDBNavbarBrand className="navbar__navbarBrand">
            <p className="navbar__navbarBrand__name">Eliezer Valenzuela</p>
            <p className="navbar__navbarBrand__profession">Desarrollador Web</p>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <Link
                  className="navbar__links"
                  to="sectionOne"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Inicio
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  className="navbar__links"
                  to="sectionTwo"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Portafolio
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  className="navbar__links"
                  to="sectionThree"
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Acerca de mi
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

export { NavbarPage };
