import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import axios from 'axios'

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
//const BookCart = (props) => {
removeBookFromCart = id => {
    axios.patch(`http://localhost:8082/api/books/cart/remove/${id}`)
    .then(res => {
      let remove = this.props.books.filter(book => book.id !== id)
      this.setState({ books: [...remove, res.data]})
    })
  }

  render(){
    return (
        <div className="rightColumn"  style={rightColumn.styles}> 
          <div className="title">{this.props.book.title}</div>
            <div className="author">{this.props.book.author}</div> 
                <div className="price-cart">${parseFloat(this.props.book.price).toFixed(2)}</div>
                  <Button onClick={()=> this.removeBookFromCart(this.props.book.id)} style={sbutton.styles}>Remove ID: {this.props.book.id}</Button>
                
                
              </div>
          )
            
          }
        }  
    
export default BookCart;
