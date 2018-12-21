import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'

const sbutton = {
    styles: {
        marginTop: "40%",
    }
}
//class BookCart extends Component {;
         const BookCart = (props) => {
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
          

export default BookCart;
