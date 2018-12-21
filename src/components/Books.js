import React, { Component } from 'react'
import Book from './Book'
//let Books = ({props}) =>  {

class Books extends Component {
   
render(){
   let listedBooks = this.props.books.map(book => {
  return <Book key={book.id} book={book} />

  })

        return (
                
                
        
                  <div>
                 {listedBooks} 
                    </div>             
                                       
        
        )
}

}

export default Books;