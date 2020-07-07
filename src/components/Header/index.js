import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import "./style.css";

const Header = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>Pokestore</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
