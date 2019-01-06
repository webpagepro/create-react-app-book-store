import React, { Component } from 'react'
import BookCart from './BookCart'
const total = {
    styles: {
        marginTop: "41%",
        float:'right'
    }
}

//let Books = ({props}) =>  {
class Books2 extends Component {

componentWillReceiveProps(blah){
    console.log("blah blah", blah)
}
    render(){
        let cartedBooks = this.props.booksInCart.map(book => {     
       return <BookCart key={book.id} book={book} removeBookFromCart={this.props.removeBookFromCart} />
 })
     
             return (
                       <div>
                      {cartedBooks} 
                      <h3 style={total.styles}>Total: ${this.props.booksInCart.reduce((accumulator, book) => {
            return accumulator + book.price
}, 0).toFixed(2)} </h3>
                         </div>                                         
        
             )
     }
     
     }
  
export default Books2;