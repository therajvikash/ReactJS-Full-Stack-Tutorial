import React from 'react';
import './App.css';
import Register from './Components/Register';




function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success">
          <a href="/" className="navbar-brand">React With Form Binding</a>
        </nav>
        <Register/>
    </div>
  );
}

export default App;
