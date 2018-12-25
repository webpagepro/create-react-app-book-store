import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'

const sbutton = {
    styles: {
        TextAlign:'right',
        marginLeft: '70%',
        marginBottom: '20px',
        marginTop:'10px'
    }
}



const BookCart = (props) => {
    return (
        <div className="list-group-item">
          <div className="col-md-12">{props.book.title}</div>
            <div className="col-md-12">{props.book.author}</div> 
                <div className="col-md-12">${parseFloat(props.book.price).toFixed(2)}</div>
                  <div className="col-md-12">{props.book.description}</div> 
                  <Button onClick={()=> props.removeBookFromCart(props.book.id)} style={sbutton.styles}>Remove From Cart ID: {props.book.id}</Button>
                
                
              </div>
          )
            
          }
          

export default BookCart;
