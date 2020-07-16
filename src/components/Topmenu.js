import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {  Nav, NavLink , Navbar, Form, FormControl,Button} from 'react-bootstrap';
export default class Topmenu extends Component {
  render() {
    return (
      <>
         <Navbar bg="dark" variant="dark">
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
    </Nav>
  
  </Navbar>
      </>
    )
  }
}
