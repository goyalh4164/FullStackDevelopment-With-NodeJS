// import './App.css';
import {  BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
    {/* Now the context inside the notestate will be available to all it's children and itself whereever we want to use it there we need to import usecontext from react*/}
    <NoteState> 
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/"  element={<Home/>}/>
    <Route exact path="/about"  element={<About/>}/>
    </Routes>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
