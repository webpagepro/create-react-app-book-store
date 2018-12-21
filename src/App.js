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
    availableBooks: [],
    filtered_search: ''
}

 booksInCart = () => this.state.booksInCart.filter (book => book.id)
 booksInStore = () => this.state.books.filter (book => book.id)


async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/books')
  const json = await response.json()
   if(!response)
   {
    console.log("failed")
  }
  
  this.setState({books: json})
  if(this.state.books.inCart === true){
    let newArr = [];
    for(let i = 0; i < this.state.books.length; i++){
      this.state.booksInCart.push(this.state.books.id[i])
 console.log("In Cart: ", this.state.booksInCart)

    }
     
      return newArr
  }

  console.log("setState books api res", this.state.books)
}


displayBooks = (e) => {
this.setState({ 
   booksInCart : e.target.value})
}


 addBookToCart = id => {
  axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
  .then(res => {
    let basket = this.state.booksInCart.filter(book => book.id !== id)
    this.setState({ books: [...basket, res.data]})
  })
  console.log("basket", this.booksInCart)  

}

removeBookFromCart = id => {
  axios.patch(`http://localhost:8082/api/books/remove/${id}`)
  .then(res => {
    let remove = this.state.books.filter(book => book.id !== id)
    this.setState({ books: [...remove, res.data]})
  })
}

render() {
   return (
      <div className="App">
      <Container>
     <Header/>
     <Search />
     <TopNavBar />
     
     
<Books books={this.state.books}/>
 
          
             <Footer copy="2018" />
</Container> 
</div>

)
}
}


export default App;
