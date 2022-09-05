import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { getUser, getEvents, getAllEvents } from './apiCalls';
import { useState, useEffect } from 'react'


function App() {

useEffect(() => {
  getUser().then(data => console.log(data))
  getEvents().then(data => console.log(data))
  getAllEvents().then(data => console.log(data))
}, [])



  return (
    <div className="App">
      <h1 className='title'>Evently</h1>
    </div>
  );
}

export default App;
