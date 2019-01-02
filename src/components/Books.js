import React, { Component } from 'react'
import Book from './Book'
import axios from 'axios'

class Books extends Component {
 state = ({
filteredSearch:  '',
type: 'title'

 })

render(){ 
   let listOfBooks = this.props.books
   //.filter(book => book.title.includes(this.state.filteredSearch))
   .map(book => <Book key={book.id} book={book} />)
 console.log("listOfBooks ", listOfBooks)
  
      let booksInCart = this.props.books
      .filter(book => book.inCart === true)
      

      return(

            <>
            {listOfBooks} {booksInCart}
                        </>    
      )}      
}

export default Books;