import './App.css';
import React from 'react';
import InputEX from './components/StateEx/InputEX';
import MapData from './components/StateEx/MapData';
// import FunComp from './components/FunComp';

const App = () => {
    return (
      <div className='App'>
        <nav className='navbar navbar-dark bg-secondary navbar-expand-sm'>
          <a href='/' className='navbar-brand font-weight-bold'>
            React Hooks - useState Example
          </a>
        </nav>
        {/* <FunComp/> */}
        {/* <InputEX/> */}
        <MapData/>
        
      </div>
    )
}
export default App
