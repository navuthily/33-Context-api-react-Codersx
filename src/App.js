import React from 'react';
import './App.css';
import Topmenu from './components/Topmenu'
import Products from './pages/Products'
import Books from './pages/Books'
import CartProvider  from './contexts/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Register from './components/Auth/Register';
import UserRoute from "./components/User/Main";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {  Nav, NavLink , Navbar, Form, FormControl,Button} from 'react-bootstrap';
const Home =() => <p>Home Na na kute</p>;

function App() {
  return (
    <CartProvider>
    <Router>
    <div className='App'>
      <Topmenu/>
      <Route path="/" exact component ={Home}/>
      <Route path="/products" exact component ={Products}/>
      <Route path="/book" exact component ={Books}/>
      <Route path="/login" exact component ={Login}/>
      <Route path="/logout" exact component ={Logout}/>
      <Route path="/register" exact component ={Register}/>
      <UserRoute/>
    </div>
  </Router>
  </CartProvider>
  );
}

export default App;
