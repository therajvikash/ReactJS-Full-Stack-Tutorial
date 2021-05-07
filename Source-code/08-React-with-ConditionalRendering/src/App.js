import React from 'react';
import './App.css';
import User from './Components/User';




function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success">
          <a href="/" className="navbar-brand">React With Condtional Rendering(if-else , ternary operator)</a>
        </nav>
        <User/>
    </div>
  );
}

export default App;
