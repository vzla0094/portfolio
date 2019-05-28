import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

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
                <a className="navbar__links" href="#sectionOne">
                  Inicio
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a className="navbar__links" href="#sectionTwo">
                  Portafolio
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a className="navbar__links" href="#sectionThree">
                  Acerca de mi
                </a>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </>
    );
  }
}

export { NavbarPage };
