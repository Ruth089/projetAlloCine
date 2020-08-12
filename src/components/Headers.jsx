import React from 'react'
import { Fragment } from 'react';
// import {
//    NavbarBrand, Nav, NavItem, NavLink
// } from 'reactstrap';


import Navbar from 'react-bootstrap/Navbar'

const Headers = (props) => {
    
  return ( 
    <header className="header">
      <h2>{props.text}</h2>
    </header>
  );
}
 
export default Headers;