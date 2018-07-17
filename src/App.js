import React, { Component } from 'react';
import Quiz from './components/Quiz'
import {Card} from 'reactstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Card>
        <Quiz />
        </Card>
      </div>
    );
  }
}

export default App;
