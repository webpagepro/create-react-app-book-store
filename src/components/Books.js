import React, { Component } from 'react'
import Book from './Book'
import axios from 'axios'
//let Books = ({props}) =>  {

class Books extends Component {
   

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