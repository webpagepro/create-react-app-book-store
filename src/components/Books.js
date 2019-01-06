import React, { Component } from 'react'
import Book from './Book'


class Books extends Component {
 state = ({
filteredSearch:  '',
type: 'title'

 })

render(){
   let listOfBooks = this.props.books
   //.filter(book => book.title.includes(this.state.filteredSearch))
   .map(book => <Book key={book.id} book={book} addBookToCart={this.props.addBookToCart} />)
 console.log("Book this.props.booksList ", this.props.booksList)

      //let booksInCart = this.props.books
     // .filter(book => book.inCart === true)


      return(

            <>
            {listOfBooks}
                        </>
      )}
}

export default Books;
