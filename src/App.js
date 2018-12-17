import React, { Component } from 'react';
import BookList from './components/BookList.js';
import Search from './components/Search.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import BookCart from './components/BookCart';

import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'



class App extends Component {

  state = {
    books: [],
   
}
async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/books')
  const json = await response.json()
   if(!response){
    console.log("failed");
  }
  
  this.setState({books: json})
  console.log(this.state.books);

}

 addBookToCart = id => {
  axios.patch(`http://localhost:8082/api/books/add/${id}`)
  .then(res => {
    let inventory = this .state.books.filter(book => book.id != id)
    this.setState({ books: [...inventory, res.data]})
  })
}

removeBookFromCart = id => {
  axios.patch(`http://localhost:8082/api/books/remove/${id}`)
  .then(res => {
    let inventory = this .state.books.filter(book => book.id != id)
    this.setState({ books: [...inventory, res.data]})
  })
}

render() {
    
    return (
      <div className="App">
      <Container>
     <Header/>
     <Search />
     <div className="books"></div>
   
     <BookList/>   
                <Footer copy="2018" />

        <BookCart/>
</Container>
</div>
    );
}

}

export default App;
