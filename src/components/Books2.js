import React, { Component } from 'react'
import Book from './BookCart'

//let Books = ({props}) =>  {

class Books2 extends Component {
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
  
export default Books2;