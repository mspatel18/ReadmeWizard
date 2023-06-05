import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Landing from './pages/Landing.jsx';
import CreateReadme from './pages/CreateReadme.jsx';
function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-readme" element={<CreateReadme />} />
      </Routes>
      
    </>
  )
}

export default App
