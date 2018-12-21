import React from 'react'
import { Card, Button, CardTitle, CardSubtitle, CardAuthor,CardText, Row } from 'reactstrap'

const Book = (props) => {
  console.log("Book JS: ", props.book.id)
    return (
 
      <div className="list-group-item">
    
        <CardTitle>{props.book.title}</CardTitle> 
         <CardSubtitle>{props.book.author}</CardSubtitle>
     
<CardText>{props.book.Price}</CardText>
         <div className="col-md-12">{props.book.publisher}</div>
          <div className="col-md-12">{props.book.description}</div> 
          <Button onClick={() => props.addBookToCart(props.book.id)}>Add To Cart</Button>
        
        
      </div>
  )
}

export default Book
