import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
// ed7485fdf71d495b860eaa1835fe5627
//rcc for class syntax
export default class App extends Component {
  render() {
    return (
      <div>
        {/* this is used to refer the class based variables */}
        <Navbar/>
      </div>
    )
  }
}
