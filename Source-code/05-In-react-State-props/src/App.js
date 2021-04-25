import React from 'react';
import './App.css';
import Parent from './components/Parent';



function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success">
          <a href="/" className="navbar-brand">React With State and Props</a>
        </nav>
        <Parent/>
    </div>
  );
}

export default App;
