import React from 'react';
import ParentComp from './components/advanced/ParentComp';
import './App.css';
function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success navbar-expand-sm">
            <a href="/" className='navbar-brand'>React with Component Interaction</a>
        </nav>
       <ParentComp/>
    </div>
  );
}

export default App;
