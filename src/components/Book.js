import React from 'react'
import { Card, Button, CardTitle, CardSubtitle, CardAuthor,CardText, Row } from 'reactstrap'

const sbutton = {
  styles: {
    TextAlign:'right',
      marginLeft: '20%',
      marginBottom: '20px',
      marginTop:'10px'
  }
}
const leftColumn = {
 styles: {
  TextAlign:'left',
    marginLeft: '0%',
    marginBottom: '2px',
    marginTop:'40px',
    top:'10px',
    position:'relative'
}
}


const Book = (props) => {


 console.log("Book JS: ", props.book.inCart)
  
    return (
<div className="className='leftColumn"  style={leftColumn.styles}>
  <div className="col-md-10">{props.book.title}</div>
    <div className="col-md-10">{props.book.author}</div> 
        <div className="col-md-10">${parseFloat(props.book.price).toFixed(2)}</div>
          <div className="col-md-10">{props.book.description}</div> 
          <div className="col-md-12"><Button onClick={()=> props.addBookToCart(props.book.id)} style={sbutton.styles}>Add To Cart {props.book.id}</Button></div>
        
        
      </div>
  )
}

export default Book