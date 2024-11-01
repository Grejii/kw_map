// src/BuildingPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import buildings from './buildings';

const BuildingPage = () => {
  const { id } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building) {
    return <div>해당 건물을 찾을 수 없습니다.</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>{building.name}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {building.floors.map((floor, index) => (
          <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
            {floor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuildingPage;
