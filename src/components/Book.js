import React, { Component } from 'react';
import { Card, Button, CardTitle, CardSubtitle, CardAuthor,CardText, Row } from 'reactstrap'
import axios from 'axios'

const sbutton = {
  styles: {
    TextAlign:'right',
      marginLeft: '70%',
      marginBottom: '20px',
      marginTop:'10px'
  }
}
const leftColumn = {
 styles: {
  TextAlign:'right',
    marginLeft: '0%',
    marginBottom: '2px',
    marginTop:'40px',
    top:'4px',
    position:'relative'
}
}




class Book extends Component{

state = {
//this.props.addBookToCart
booksInCart: []
}

addBookToCart = (id) => {
  axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
  .then(res => {
    let add = this.props.books.filter(book => book.id !== id)
    this.setState({booksInCart: [...add, res.data]})
  })
}

//const Book = (props) => {
  render(){ console.log("Book JS: addBooksToCart", this.addBooksToCart)

    return (
<div className="className='leftColumn"  style={leftColumn.styles}>
  <div className="title">{this.props.book.title}<div className="price">${parseFloat(this.props.book.price).toFixed(2)}</div></div>
    <div className="author">{this.props.book.author}</div> 
          <div className="description">{this.props.book.description}</div> 
          <div className="col-md-12"><Button onClick={()=> this.addBookToCart(this.props.book.id)} style={sbutton.styles}>Add To Cart {this.props.book.id}</Button></div>
        
        
      </div>
  )
}
}
export default Book