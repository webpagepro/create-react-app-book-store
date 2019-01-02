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
  
}
 
  async componentDidMount() {

  const response = await fetch('http://localhost:8082/api/books')
  const json = await response.json()
   if(!response)
   {
    console.log("failed api response")
   }  
    console.log("async: ", this)
    this.setState({books: json}) 
}

//booksInCart = this.state.books.filter(book =>   book.inCart === true)

filteredBookSearch = (e) => {
  this.setState({
    filtered_book: e.target.value
  })
}
render() { 
console.log("booksInCart ", this.booksInCart)
   return (
      <div className="App">
      <Container>
     <Header/>
     <Search className="search" filterBookSearch={this.filterBookSearch}/>
     
     <TopNavBar />
     
    
<Row>
     <Col sm="12" md={{ size: 8, offset: 0}} >
     <Card>
<Books books = {this.state.books.filter(book => book.inCart === false)}/>  
</Card></Col>
     <Col sm="12" md={{ size: 4, offset: 0}} ><div className="cartTitle">Your Cart</div>
<Books2 books = {this.state.books.filter(book => book.inCart === true)}/>   

      </Col> 
     </Row>   
             <Footer copy="2019" />
</Container> 
</div>

)
}
}


export default App;
