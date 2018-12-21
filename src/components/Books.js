import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row } from 'reactstrap'
import Book from './Book'
//let Books = ({props}) =>  {

class Books extends Component {
   
render(){
   let listedBooks = this.props.books.map(book => {
  return <Book key={book.id} book={book} />

  })
   console.log("Books JS", listedBooks)

        return (
                
                
        
                  <div>
                 
                          {/*  <Card > <Row>
                             <CardTitle>Title</CardTitle>
                                  <CardTitle>Author</CardTitle>
                                <CardTitle>Price</CardTitle>
                                <CardTitle>Description</CardTitle>
                               </Row>
                                </Card>
                            */}
                              {listedBooks} 

                    </div>             
                                       
        
        )
}

}

export default Books;
