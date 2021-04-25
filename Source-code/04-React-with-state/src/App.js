import React from 'react';
import './App.css';
import StateEx from './components/StateEx';
import StateExArray from './components/StateExArray';



function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success">
          <a href="/" className="navbar-brand">React With State</a>
        </nav>
        <StateEx/>
        <StateExArray/>
    </div>
  );
}

export default App;
