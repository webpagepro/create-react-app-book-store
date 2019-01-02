import React, { Component } from 'react'
import BookCart from './BookCart'

//let Books = ({props}) =>  {
class Books2 extends Component {

componentWillReceiveProps(blah){
    console.log("blah blah", blah)
}
    render(){
        let cartedBooks = this.props.books.map(book => {     
       return <BookCart key={book.id} book={book} removeBookFromCart={this.props.removeBookFromCart} />
 })
     
             return (
                       <div>
                      {cartedBooks} 
                         </div>                                         
        
             )
     }
     
     }
  
export default Books2;