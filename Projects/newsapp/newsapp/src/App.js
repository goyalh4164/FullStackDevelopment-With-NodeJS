import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';



// ed7485fdf71d495b860eaa1835fe5627
//rcc for class syntax
{/* this is used to refer the class based variables */}

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} country={"in"} />
      </div>
    )
  }
}
