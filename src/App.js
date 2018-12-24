import React, { Component } from 'react';
//import Books2 from './components/Books2';
import Books from './components/Books';
import Search from './components/Search.js';
import Header from './components/Header.js';
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
    filteredBook: ''
}

  //booksInStore = () => this.state.booksInCart.filter (book => book.id)


async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/books')
  const json = await response.json()
   if(!response)
   {
    console.log("failed")
  }
  
  this.setState({books: json})
       console.log("setState books api res", this)


}


filterBookSearch = (e) => {
this.setState({ 
  filtered_search : e.target.value})
}


 addBookToCart = id => {
  axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
  .then(res => {
    let add = this.state.booksInCart.filter(book => book.id != id)
    this.setState({ books: [...add, res.data]})
  })
  console.log("add", this.booksInCart)  

}

removeBookFromCart = id => {
  axios.patch(`http://localhost:8082/api/books/cart/remove/${id}`)
  .then(res => {
    let remove = this.state.books.filter(book => book.id !== id)
    this.setState({ books: [...remove, res.data]})
  })
}


booksInCart = () => this.state.books.filter (book =>  {
  return book.inCart != false;   

 })


render() {
   return (
      <div className="App">
      <Container>
     <Header/>
     <Search filterBookSearch={this.filterBookSearch}/>
     <TopNavBar />
     
     
<Books books ={this.booksInCart(this.state.books)}/>
          
             <Footer copy="2018" />
</Container> 
</div>

)
}
}


export default App;
