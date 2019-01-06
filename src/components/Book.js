import React, { Component } from 'react';
import { Button} from 'reactstrap'


const sbutton = {
  styles: {
    TextAlign: 'right',
    marginLeft: '70%',
    marginBottom: '20px',
    marginTop: '10px'
  }
}
const leftColumn = {
  styles: {
    TextAlign: 'right',
    marginLeft: '0%',
    marginBottom: '2px',
    marginTop: '40px',
    top: '4px',
    position: 'relative'
  }
}


class Book extends Component {



  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })

  }


  render() {   
    console.log("baook", this.props.addBookToCart)

    return this.props.addBookToCart?(

      <div className="leftColumn" style={leftColumn.styles}>
        <div className="title">{this.props.book.title}<div className="price">${parseFloat(this.props.book.price).toFixed(2)}</div></div>
        <div className="author">{this.props.book.author}</div>
        <div className="description">{this.props.book.description}</div>

        <div className="button"><Button onClick={() => this.props.addBookToCart(this.props.book.id)} style={sbutton.styles}>Add To Cart {this.props.book.id}</Button></div>

      </div>
    ):(<div>loading</div>)
  }
}
export default Book