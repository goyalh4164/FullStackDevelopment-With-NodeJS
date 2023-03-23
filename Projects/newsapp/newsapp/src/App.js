import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// 3c01c27651cb47189046852bd8bdf521
// ed7485fdf71d495b860eaa1835fe5627
//rcc for class syntax
{/* this is used to refer the class based variables */}

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          {/* exact is used when we are providing the exact path it will work only if the exact path is found */}
          {/* we need to provide the unique key to every news item so react can know that it has to remount the component */}
          <Route exact path="/" element={<News key="home" pageSize={this.pageSize} country={"in"} category="general"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={"in"} category="entertainment"/>}/>
          <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country={"in"} category="general"/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={"in"} category="health"/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country={"in"} category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country={"in"} category="sports"/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country={"in"} category="business"/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={"in"} category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
