import './App.css';
import Navbar from './components/NavBar';
import Scroll from './components/Scroll';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Login/> */}
      <Signup/>
      
      {/* <Scroll/> */}
    </div>
  );
}

export default App;
