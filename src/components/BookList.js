import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'




class BookList extends Component {
    render() {
        return (
                <div>
                    <h2>Books Available: </h2>
                    <div>
                        {this.props.books.map(book =>
                            <Card key={book.id} value={book.id} body inverse color="primary">
                                <CardTitle>{book.title}</CardTitle>
                                <CardTitle>{book.author}</CardTitle>
                                <CardTitle>${book.price}</CardTitle>
                                <CardText>{book.description}</CardText>
                                <Button onClick={() => this.props.addBookToCart(book.id)} color="secondary">Add To Cart</Button>
                            </Card>
                        )}
                    </div>
                </div>
             );
        }
}

export default BookList;
