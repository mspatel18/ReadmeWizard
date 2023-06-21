import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/HomeScreen.jsx";
import CreateReadme from "./pages/CreateReadme.jsx";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Landing />} />
          <Route path="/create" element={<CreateReadme />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
