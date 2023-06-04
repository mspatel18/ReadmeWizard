import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Generate from './pages/Generate.jsx';
import Landing from './pages/Landing.jsx';
function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/generate" element={<Generate />} />
      </Routes>
      
    </>
  )
}

export default App
