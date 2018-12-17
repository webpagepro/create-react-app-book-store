import React from 'react'


const Book = (props) => {
  console.log("Book: ", props.item.book)
    return (

      <div className="list-group-item">
      <div className="row">
          <div className="col-md-4">{props.book.title}</div>
          <div className="col-md-2">{props.book.author}</div>
          <div className="col-md-2">{props.book.Price}</div>
          <div className="col-md-2">{props.book.publisher}</div>
          <div className="col-md-2">{props.book.description}</div>
         
        </div> 
        
      </div>
  )
}

export default Book
