// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import BuildingPage from './BuildingPage';
import FloorPage from './FloorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/building/:id" element={<BuildingPage />} />
        <Route path="/building/:id/floor/:floor" element={<FloorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
