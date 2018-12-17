import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import Book from './Book'

class BookList extends Component  { 

    state = {
        filterPhrase: '',

    }
   
render(){
        let listOfBooks = this.props.bookItems
        .filter(book => book[this.state.type].includes(this.statelfilterPhrase))
        .map(book => <Book key={book.id} book={book} />)

      return (
    <div>
          <input type="text" name="filterPhrase" onChange={this.handleChange} value={this.state.filterPhrase} />
          <select name='type' onChange={this.handleChange} value={this.state.type}>
        <option value='title'> Title</option>
        <option value="author">Author</option>
          </select>
      {listOfBooks }
    
         </div>
      )
    }
}

export default BookList;
