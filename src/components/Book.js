import React from 'react'
import { Card, Button, CardTitle, CardSubtitle, CardAuthor,CardText, Row } from 'reactstrap'

const sbutton = {
  styles: {
    TextAlign:'right',
      marginLeft: '70%',
      marginBottom: '20px',
      marginTop:'10px'
  }
}



const Book = (props) => {


 console.log("Book JS: ", props.book.inCart)
  
    return (
<div className="list-group-item">
  <div className="col-md-12">{props.book.title}</div>
    <div className="col-md-12">{props.book.author}</div> 
        <div className="col-md-12">${parseFloat(props.book.price).toFixed(2)}</div>
          <div className="col-md-12">{props.book.description}</div> 
          <Button onClick={()=> props.addBookToCart(props.book.id)} style={sbutton.styles}>Add To Cart {props.book.id}</Button>
        
        
      </div>
  )
}

export default Book