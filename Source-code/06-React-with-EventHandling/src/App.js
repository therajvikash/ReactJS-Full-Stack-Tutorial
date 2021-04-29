import React from 'react';
import './App.css';
import Events from './components/Events';
import Events2 from './components/Events2';
import UncontrollerComponents from './components/UncontrollerComponents';




function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success">
          <a href="/" className="navbar-brand">React With Events Binding</a>
        </nav>
        {/* <Events/> */}
        {/* <UncontrollerComponents/> */}
        <Events2/>
    </div>
  );
}

export default App;
