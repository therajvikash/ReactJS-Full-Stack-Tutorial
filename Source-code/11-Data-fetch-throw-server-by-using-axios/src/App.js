import React from 'react';
import './App.css';
import ServerSideReact from './components/ServerSideReact';



function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-success">
          <a href="/" className="navbar-brand">React With Lifecycle  Method</a>
        </nav>
        <ServerSideReact/>
    </div>
  );
}

export default App;
