import React, { Component } from 'react';
import { Navbar, Dropdown, Nav } from 'react-bootstrap';
import logo from './image/logo.svg';

class Navbarx extends Component {

  
  render() {
    return (
      <div >
         <Navbar bg="light" style={{marginLeft:10,marginRight:10,marginTop:10,borderRadius:3}} expand="lg">
        <Navbar.Brand href="#home">
            <img
            alt=""
            src={logo}
            height="35"
            className="d-inline-block align-top"
             />{' '}
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className="navname" href="#home">Home</Nav.Link>
            <Nav.Link className="navname"  href="#link">About-Us</Nav.Link>
            <Nav.Link className="navname"  href="#link">Our Solutions</Nav.Link>
            <Nav.Link className="navname"  href="#link">Our Clients</Nav.Link>
            <Nav.Link className="navname"  href="#link">Contact-Us</Nav.Link>
            <Dropdown>
   
  </Dropdown>
            </Nav>
           
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}




export default Navbarx;

