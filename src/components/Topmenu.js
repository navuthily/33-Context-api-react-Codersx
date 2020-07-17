import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/assets/css/Header.css'
import {user } from '../constants/Config'
import {CartContext} from '../contexts/Cart'
import {  Nav, NavLink ,NavDropdown, Navbar, Form, FormControl,Button} from 'react-bootstrap';
export default class Topmenu extends Component {
  render() {
    console.log(user+'user')
    return (
      <>
   <Navbar bg="white"  className='navbar1'>
    <Navbar.Brand ><img className='logo-codersx' src='./codersx.png'>
      </img></Navbar.Brand>
      <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button className='button' type="submit">Submit</Button>
  </Form>
    <Nav className="nav-li mr-sm-2">
      <Nav.Link href="/">Home</Nav.Link>
      {user  &&
       <>
         <NavDropdown title="Books" id="collasible-nav-dropdown">
         <NavDropdown.Item href="/tong-hop">Tong hop</NavDropdown.Item>
        <NavDropdown.Item href="new">New</NavDropdown.Item>
        <NavDropdown.Item href="/ban-chay">Ban chay</NavDropdown.Item>
        <NavDropdown.Item href="/give-way">Give way</NavDropdown.Item>
        <NavDropdown.Divider />
         </NavDropdown>
         <Nav.Link href="/add">Add</Nav.Link>
       </>
      }
      {!user  &&
         <Nav.Link href="/products">Book give way</Nav.Link>
      }
     <CartContext.Consumer>
        {({cartItems})=>( 
        <Nav.Link href="/products">Cart({cartItems.length})</Nav.Link>
         )}
     </CartContext.Consumer>
  
      {!user  &&
    <>
       <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </>
      }
     {user  &&
    <>
       <Nav.Link href="/logout">Logout</Nav.Link>
    </>
      }
     
    </Nav>
  
  </Navbar>
      </>
    )
  }
}
