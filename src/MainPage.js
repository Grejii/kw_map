// MainPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import buildings from './buildings';
import './MainPage.css';

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBuildings = buildings.filter(
    (building) =>
      building.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      building.floors.some((floor) => floor.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="main-container">
      <h1>광운대학교 건물 안내</h1>
      <input
        type="text"
        placeholder="건물명이나 시설을 검색하세요..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <div className="building-list">
        {filteredBuildings.map((building) => (
          <Link to={`/building/${building.id}`} key={building.id} className="building-card">
            <h2>{building.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
