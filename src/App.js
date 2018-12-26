import React, { Component } from 'react';
import Books2 from './components/Books2';
import Books from './components/Books';
import Search from './components/Search.js';
import Header from './components/Header.js';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';

import { Container, Row, Col, Card, Button } from 'reactstrap';
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


InCart = () => this.state.books.filter (book =>  {
  return book.inCart !== false
 }) 

 OutCart = () => this.state.books.filter (book =>  {
  


 console.log("booksInCart ", this.state.books)
 return book.inCart === false
 }) 
 

render() {
   return (
      <div className="App">
      <Container>
     <Header/>
     <Search className="search" filterBookSearch={this.filterBookSearch}/>
     
     <TopNavBar />
     
    
<Row>

     
     <Col sm="12" md={{ size: 8, offset: 0}} >
<Books books ={this.OutCart(this.state.books)}/>  
</Col>
     <Col sm="12" md={{ size: 4, offset: 0}} >
<Books2 books = {this.InCart(this.state.books)}/>   
      </Col> 
     </Row>   
             <Footer copy="2018" />
</Container> 
</div>

)
}
}


export default App;
