import './App.css';
import Navbar from './components/NavBar';
import Scroll from './components/Scroll';
import { useState, useEffect } from 'react';
import { getTest } from './functions/test';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Scroll></Scroll>
    </div>
  );
}

export default App;
