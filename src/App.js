import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import './App.css';
import data from './data.json';
import { ListGroup } from 'react-bootstrap';

let numsArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      word: '',
      numbers:  numsArr,
      selected: 'all'    
    }
  }

  handleName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  handleWord = event => {
    this.setState({
      word: event.target.value,
    })
  }

  handleNumbers = event => {
    let newNumsArr = numsArr;
    let selected = event.target.value;

    if (selected === 'even') {
      newNumsArr = numsArr.filter(num => num % 2 === 0);
    }

    if (selected === 'odd') {
      newNumsArr = numsArr.filter(num => num % 2 === 1);
    }
    this.setState({
      selected: event.target.value,
      numbers: newNumsArr
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let word = e.target.word.value;
    let selected = e.target.selected.value;
    console.log(name, word, selected);
  }

  render() {
    let nums = this.state.numbers.map(num => <ListGroup.Item key={num}>{num}</ListGroup.Item>);

    return(
      <>
        <Header />
        <Main 
          data={data}
          handleNumbers={this.handleNumbers}
          handleWord={this.handleWord}
          handleSubmit={this.handleSubmit}

        />
        <Footer />
      </>
    );
  }
}

export default App;
