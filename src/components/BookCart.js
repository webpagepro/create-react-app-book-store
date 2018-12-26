import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'

const sbutton = {
    styles: {
        TextAlign:'right',
        marginLeft: '10%',
        marginBottom: '20px',
        marginTop:'5px',
        backgroundColor:'#f00',
        width:'90px',
        height:'25px',
        paddingBottom:'8px',
        fontSize:'11px',
        fontWeight:'bold'
    }
}
const rightColumn = {
    styles: {
        textAlign:'right'
    }
}

const BookCart = (props) => {
    return (
        <div className="rightColumn"  style={rightColumn.styles}> Shopping Cart
          <div className="title">{props.book.title}</div>
            <div className="author">{props.book.author}</div> 
                <div className="price-cart">${parseFloat(props.book.price).toFixed(2)}</div>
                  <Button onClick={()=> props.removeBookFromCart(props.book.id)} style={sbutton.styles}>Remove ID: {props.book.id}</Button>
                
                
              </div>
          )
            
          }
          

export default BookCart;
