import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'

const sbutton = {
    styles: {
        TextAlign:'left',
        marginLeft: '10%',
        marginBottom: '20px',
        marginTop:'10px',
        backgroundColor:'#f00'
    }
}
const rightColumn = {
    styles: {
    }
}

const BookCart = (props) => {
    return (
        <div className="className='rightColumn"  style={rightColumn.styles}>
          <div >{props.book.title}</div>
            <div >{props.book.author}</div> 
                <div>${parseFloat(props.book.price).toFixed(2)}</div>
                  <Button onClick={()=> props.removeBookFromCart(props.book.id)} style={sbutton.styles}>Remove ID: {props.book.id}</Button>
                
                
              </div>
          )
            
          }
          

export default BookCart;
