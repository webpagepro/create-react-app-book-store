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
   .map(book => <Book key={book.id} book={book} books={this.props.books}  />)
 console.log("Book this ", this)
  
      //let booksInCart = this.props.books
     // .filter(book => book.inCart === true)
      

      return(

            <>
            {listOfBooks} 
                        </>    
      )}      
}

export default Books;