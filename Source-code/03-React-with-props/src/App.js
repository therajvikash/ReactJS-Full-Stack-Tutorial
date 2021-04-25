import React from 'react';
import './App.css';
import Card from './components/Card';
import Second from './components/Second';


function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success">
          <a href="/" className="navbar-brand">React With Props</a>
        </nav>
        {/* <Card course="ReactJS"/>
        <Card course="Angular"/>
        <Card course="Vuejs"/> */}
      <Second/>

    </div>
  );
}

export default App;
