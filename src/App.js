import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import BuildingPage from './BuildingPage';
import FloorPage from './FloorPage';
import RoomPage from './RoomPage'; // 강의실 이동 페이지 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/building/:id" element={<BuildingPage />} />
        <Route path="/building/:id/floor/:floor" element={<FloorPage />} />
        <Route path="/building/:id/floor/:floor/room/:room" element={<RoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
