import React from 'react'
import { Fragment } from 'react';
// import {
//    NavbarBrand, Nav, NavItem, NavLink
// } from 'reactstrap';


import Navbar from 'react-bootstrap/Navbar'

const Headers = () => {
    
  return ( 
    <>
      <Navbar bg="dark" variant="dark">
           <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Allo cine
        </Navbar.Brand>
      </Navbar>
      <br/>
    </> 
  );
}
 
export default Headers;