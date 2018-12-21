import React, { Component } from 'react';
import Books from './components/Books';
import Search from './components/Search.js';
import Header from './components/Header.js';
//import BookCart from './components/BookCart';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';

import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'



class App extends Component {

  state = {
    books: [],
    booksInCart: [],
    total:0,
    availableBooks: []
}

 //booksInCart = () => this.state.books.filter (book => book.inCart)
 

async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/books')
  const json = await response.json()
   if(!response)
   {
    console.log("failed")
  }
  
  this.setState({books: json})
  console.log("setState books api res", this.state.books)
}


displayBooks = (e) => {
this.setState({ 
   display_books : e.target.value})
}


 addBookToCart = id => {
  axios.patch(`http://localhost:8082/api/books/add/${id}`)
  .then(res => {
    let inventory = this.state.books.filter(book => book.id !== id)
    console.log("inventory",inventory)
    this.setState({ books: [...inventory, res.data]})
  })
}

removeBookFromCart = id => {
  axios.patch(`http://localhost:8082/api/books/remove/${id}`)
  .then(res => {
    let inventory = this.state.books.filter(book => book.id !== id)
    this.setState({ books: [...inventory, res.data]})
  })
}

render() {
  console.log("addBookToCart  ", this.addBookToCart)

    return (
      <div className="App">
      <Container>
     <Header/>
     <Search />
     <TopNavBar />
     
   <Row>   
<Books books={this.state.books}/>
    
     
      </Row>    
             <Footer copy="2018" />
</Container> 
</div>

)
}
}


export default App;
