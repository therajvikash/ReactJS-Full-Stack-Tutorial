import React from 'react';
import './App.css';
import Clock from './components/Clock';




function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success">
          <a href="/" className="navbar-brand">React With Lifecycle  Method</a>
        </nav>
        <Clock/>
    </div>
  );
}

export default App;
