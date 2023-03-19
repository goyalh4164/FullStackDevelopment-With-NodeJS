// import logo from './logo.svg';  //commented it because it is in no use
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'

//Our coding starts from here 

function App() {
  const [mode, setMode] = useState('light'); //Dark Mode Control
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading="Enter the text to analyze" />
    <About/>
    </>
  );
}

export default App;
