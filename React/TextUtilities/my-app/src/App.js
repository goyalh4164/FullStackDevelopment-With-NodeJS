import logo from './logo.svg';
import './App.css';

//Our coding starts from here 
let name="Harsh Goyal";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    
    <div className="container">
      {/* {Here we write JS} */}
      {/* Babel Compiles the JSX */}
      {/* Helps to build Single page application */}
      {/* Many amout of JS comes in one request and helps in saving the whole page reloading for particular request and saves alot of badwidth and handles million users easily */}
      <h1>{name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas possimus dolor nisi odio. Dolor unde quasi porro et. Possimus ipsum, deserunt omnis consequatur, aliquam dolore iusto assumenda culpa non eius unde illo obcaecati animi rerum dolorum doloremque recusandae blanditiis accusantium.</p>
    </div>
    </>
  );
}

export default App;