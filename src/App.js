import React, { Component } from 'react';
import Zoo from './Components/Zoo/Zoo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
        <h1>Zoo - Simple Zoom (React)</h1>
        <Zoo image="https://luismachain95.github.io/Zoo/image/img.jpg" width='500' height='500'/>
      </div>
    );
  }
}

export default App;
