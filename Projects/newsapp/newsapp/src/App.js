import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



// ed7485fdf71d495b860eaa1835fe5627
//rcc for class syntax
{/* this is used to refer the class based variables */}

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          {/* exact is used when we are providing the exact path it will work only if the exact path is found */}
          {/* we need to provide the unique key to every news item so react can know that it has to remount the component */}
          <Route exact path="/" element={<News key="home" pageSize={5} country={"in"} category="general"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country={"in"} category="entertainment"/>}/>
          <Route exact path="/general" element={<News key="general" pageSize={5} country={"in"} category="general"/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={5} country={"in"} category="health"/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={5} country={"in"} category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={5} country={"in"} category="sports"/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={5} country={"in"} category="business"/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={5} country={"in"} category="technology"/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
