import React, { Component } from 'react'
import Book from './Book'
import axios from 'axios'
//let Books = ({props}) =>  {

class Books extends Component {
 state = ({
booksInCart: []
 })

   addBookToCart = (id) => {
      axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
      .then(res => {
        let add = this.books.filter(book => book.id !== id)
        this.setState({booksInCart: [...add, res.data]})
      })
    }

render(){
   let listedBooks = this.props.books.map(book => {
  return <Book key={book.id} book={book} />

 
 })
        return (
            <>
                 {listedBooks} 
                    </>     
        )
}

}

export default Books;