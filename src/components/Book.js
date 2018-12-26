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


const Book = (props) => {
 console.log("Book JS: ", props.book.id)
  
    return (
<div className="className='leftColumn"  style={leftColumn.styles}>
  <div className="title">{props.book.title}<div className="price">${parseFloat(props.book.price).toFixed(2)}</div></div>
    <div className="author">{props.book.author}</div> 
          <div className="description">{props.book.description}</div> 
          <div className="col-md-12"><Button onClick={()=> props.addBookToCart(props.book.id)} style={sbutton.styles}>Add To Cart {props.book.id}</Button></div>
        
        
      </div>
  )
}

export default Book