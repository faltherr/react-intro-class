import React, { Component } from 'react';
import './App.css';

// Import the calculator component in App.js.
import Calculator from '../src/Calculator/Calculator';

// Add the calculator component in the return of the render method in App.js.

class App extends Component {
  render() {
    return (
      <div>
      <Calculator />
      </div>
    );
  }
}

export default App;
