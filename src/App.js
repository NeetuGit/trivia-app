import React, { Component } from 'react';
import Quiz from './components/Quiz'
import {Card,CardTitle} from 'reactstrap'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Card>
      <CardTitle> Quiz Time !!</CardTitle>
        <Quiz />
        </Card>
      </div>
    );
  }
}

export default App;
