import './App.css';

import React, { Component } from 'react'
// ed7485fdf71d495b860eaa1835fe5627
//rcc for class syntax
export default class App extends Component {
  c="Harsh Goyal"
  render() {
    return (
      <div>
        {/* this is used to refer the class based variables */}
        Hello my first class based component  {this.c}
      </div>
    )
  }
}
