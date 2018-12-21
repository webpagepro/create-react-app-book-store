import React, { Component } from 'react';
import {FormGroup, Input, Button, Form} from 'reactstrap'
class Search extends Component {
    state = {
        query: '',
        books: []
    }



    render() {
        const { query, books } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div
                        className="close-search"
                        to='/'>Close
                    </div>
                    <div className="search-books-input-wrapper">
                        <Input
                          type="text"
                          onChange={(e) => this.search(e.target.value)}
                          placeholder="Search by title or author"
                          value={query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                      {books.map((book) => (
                        <li>
                          <div>
                             <p>{book.title}</p>
                             <p>{book.author}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search