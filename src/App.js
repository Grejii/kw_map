import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import BuildingPage from './BuildingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/building/:id" element={<BuildingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
