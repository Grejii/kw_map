// FloorPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import buildings from './buildings';

const FloorPage = () => {
  const { id, floor } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building) {
    return <div>해당 건물을 찾을 수 없습니다.</div>;
  }

  const floorData = building.floors.find((f) => f.floor === floor);

  if (!floorData) {
    return <div>해당 층 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h2>{`${building.name} - ${floorData.floor}`}</h2>
      <ul>
        {floorData.rooms.map((room, index) => (
          <li key={index}>{room}</li>
        ))}
      </ul>
    </div>
  );
};

export default FloorPage;
