import React, { Component } from 'react'
import {Button} from 'reactstrap'


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

class BookCart extends Component {
//const BookCart = (props) => 


 render(){
    

    return (
        <div className="rightColumn"  style={rightColumn.styles}> 
          <div className="title">{this.props.book.title}</div>
            <div className="author">{this.props.book.author}</div> 
                <div className="price-cart">${parseFloat(this.props.book.price).toFixed(2)}</div>
                  <Button onClick={()=> this.props.removeBookFromCart(this.props.book.id)} style={sbutton.styles}>Remove ID: {this.props.book.id}</Button>
              </div>
             
             
          )
         }
        }  
    
export default BookCart;