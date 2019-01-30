import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Boot Strap
import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component { 
  render() {
    return (
      <div className="container">
        <div id="content"> Item 1 </div> 
        <div id="sidebar"> Item 2 </div>
      </div>
    );  
  }
}

export default App;
