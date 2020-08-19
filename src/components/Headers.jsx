import React from 'react'
import { Fragment } from 'react';
// import {
//    NavbarBrand, Nav, NavItem, NavLink
// } from 'reactstrap';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Headers = ({ upcoming, top, popular }) => {
    
  return ( 
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header"
    style={{ height : "70px"}}>
      <Navbar.Brand style={{fontSize : "22px"}}>Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav  eventKey={3}>
          <Nav.Link onClick={ upcoming}><p style={{ fontSize : "20px" }}>Upcoming</p></Nav.Link>
          <Nav.Link onClick={top}> <p  style={{ fontSize : "20px" }}>Top</p> </Nav.Link>
          <Nav.Link onClick={popular}> <p  style={{ fontSize : "20px" }}>popular</p> </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}
 
export default Headers;