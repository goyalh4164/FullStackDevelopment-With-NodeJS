// import logo from './logo.svg';  //commented it because it is in no use
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//Our coding starts from here 

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <TextForm heading="Enter the text to analyze" />
    </>
  );
}

export default App;
