import React, { Component } from 'react';
import CounterComponent from './components/smart/Counter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<CounterComponent />);
  }
}

export default App;
