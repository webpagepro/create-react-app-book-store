import React, { Component } from 'react'
import Book from './Book'
import { Card, Button, CardTitle, CardSubtitle, CardAuthor,CardText, Row } from 'reactstrap'

//let Books = ({props}) =>  {

//class Books extends Component {
  const Books2 = (props) => {  
//render(){    
    console.log("Books2 JS: ", props)
    const sbutton = {
        styles: {
          TextAlign:'right',
            marginLeft: '70%',
            marginBottom: '20px',
            marginTop:'10px'
        }
      }
   let listedBooks = props.books.map(book => {
  return <Book book={book} />
  })

  


 
      return (
  <div className="list-group-item">
    <div className="col-md-12">{props.books.title}</div>
      <div className="col-md-12">{props.books.author}</div> 
          <div className="col-md-12">${parseFloat(props.books.price).toFixed(2)}</div>
            <div className="col-md-12">{props.books.description}</div> 
{listedBooks}
        </div>
      )

}
  
export default Books2;