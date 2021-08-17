import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Section';
import { on, off } from './components/Section/data';
import NextText from './components/Section/NextText';
import React from 'react'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Content />
        <NextText {...on}/>
        <NextText {...off} />
        </Router>
    </>
  );
}

export default App;
