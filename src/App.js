import React, { Component } from 'react';
import BookList from './components/BookList.js';
import Search from './components/Search.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Container, Row, Col } from 'reactstrap';




class App extends Component {

  state = {
    books: [],
   
}
async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/books')
  const json = await response.json()
  this.setState({books: json})
  if(!response){
    console.log("failed");
  }
  
}


render() {

  
    
    return (
      <div className="App">
      <Container>
     <Header/>
     <Search />
     <div className="books"></div>
                 <BookList />   
                <Footer copy="2018" />


</Container>
</div>
    );
}

}

export default App;
