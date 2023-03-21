import './App.css';

import React, { Component } from 'react'

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
