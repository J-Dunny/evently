import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { getEvents } from './apiCalls';
import { useState, useEffect } from 'react'


function App() {

useEffect(() => {
  getEvents().then(data => console.log(data))
}, [])



  return (
    <div className="App">
      <h1 className='title'>Evently</h1>
    </div>
  );
}

export default App;
