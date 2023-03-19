// import logo from './logo.svg';  //commented it because it is in no use
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';

//Our coding starts from here 

function App() {
  const [mode, setMode] = useState('light'); //Dark Mode Control
  const [alert,setAlert] =useState(null);

  const showalert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // document.body.style.backgroundColor='grey'
      showalert("Dark Mode Enabled","success");
    }
    else{
      setMode('light')
      showalert("Light Mode Enabled","success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm heading="Enter the text to analyze" />
    <About/>
    </>
  );
}

export default App;
