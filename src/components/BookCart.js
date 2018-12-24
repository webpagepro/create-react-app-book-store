import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
//import BookCart from './Book'
const sbutton = {
    styles: {
        TextAlign:'right',
        marginLeft: '70%',
        marginBottom: '20px',
        marginTop:'10px'
    }
}



const BookCart = (props) => {
            console.log("Book Cart: ", props)
let newArr = [];
let inCart = props.book.inCart;
 for(let i = 0; i < inCart.length; i++ ){
if( inCart !== false){
    newArr.push(inCart[i])
 
console.log("Book Cart:newArr ", newArr)     
          
              return (
          <div className="list-group-item">
            <div className="col-md-12">{props.book.title}</div>
              <div className="col-md-12">{props.book.author}</div> 
                  <div className="col-md-12">${parseFloat(props.book.price).toFixed(2)}</div>
                    <div className="col-md-12">{props.book.description}</div> 
                  
                  
                </div>
              )  } 
             }
            
          }
          

export default BookCart;
