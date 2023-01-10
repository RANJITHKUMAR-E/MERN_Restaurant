import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/>
    </div>
  );
}

export default App;
