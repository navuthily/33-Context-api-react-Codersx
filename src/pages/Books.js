import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import {CartContext} from '../contexts/Cart'
export default class Books extends Component {
  constructor(props) {
    super(props);
    this.state={
      books:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/book/ap')
    .then(res=>{
      console.log(res);
      this.setState({
        books: res.data
      })
    })
  }
  render() {
    const {books}= this.state;
    return (
<div>
  <Row>
    
{books.map((book, index) => {
        return(
           

<Col-4>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={book.cover}/>
<Card.Body>
  <Card.Title>{book.name}</Card.Title>
  <Card.Text>
   {book.description}
  </Card.Text>
  <CartContext.Consumer>
{({addToCart})=>  <Button onClick ={()=>addToCart(book)} variant="primary">Add to cart </Button>}
  </CartContext.Consumer>
</Card.Body>
</Card> 
</Col-4>
        )
        
      })}
  </Row>
</div>
)}
  
}

