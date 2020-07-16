import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Card, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {CartContext} from '../contexts/Cart'
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state={
      products:[]
    }
  }
  componentDidMount(){
    axios.get('https://v4c0c.sse.codesandbox.io/products')
    .then(res=>{
      console.log(res);
      this.setState({
        products: res.data
      })
    })
  }
  render() {
    const {products}= this.state;
    return (
<div>
  <Row>
    
{products.map((product, index) => {
        return(
           

<Col-4>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={product.imageUrl}/>
<Card.Body>
  <Card.Title>{product.name}</Card.Title>
  <Card.Text>
   {product.description}
  </Card.Text>
  <CartContext.Consumer>
{({addToCart})=>  <Button onClick ={()=>addToCart(product)} variant="primary">Add to cart </Button>}
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

