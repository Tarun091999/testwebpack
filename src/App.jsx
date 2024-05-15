import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import About from './About';
import Home from './home';

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/home' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />

    </Routes>
   </Router>
   </>
  );
}

export default App;
