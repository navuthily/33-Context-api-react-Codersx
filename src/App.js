import React from 'react';
import './App.css';
import Topmenu from './components/Topmenu'
import Products from './pages/Products'
import CartProvider  from './contexts/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  Nav, NavLink , Navbar, Form, FormControl,Button} from 'react-bootstrap';
const Home =() => <p>Home Na na kute</p>;

const Users =() => <p>User Na na kute</p>;
const About =() => <p>About Na na kute</p>;
function App() {
  return (
    <CartProvider>
    <Router>
    <div className='App'>
      <Topmenu/>
      <Route path="/" exact component ={Home}/>
      <Route path="/products" exact component ={Products}/>

   
    </div>
  </Router>
  </CartProvider>
  );
}

export default App;
