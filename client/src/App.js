import './App.css';
import Navbar from './components/NavBar';
import { useState, useEffect } from 'react';
import { getTest } from './functions/test';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
