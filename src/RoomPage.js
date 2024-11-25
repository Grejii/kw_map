// RoomPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Building1 from './buildings/Building1'; // 필요한 다른 건물도 추가하세요

const RoomPage = () => {
  const { id, floor, room } = useParams();

  // 모든 건물 리스트
  const buildings = [Building1]; // 추가 건물 Building2, Building3 등을 여기에 추가
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building) {
    return <div>해당 건물을 찾을 수 없습니다.</div>;
  }

  const floorData = building.floors.find((f) => f.floor === floor);

  if (!floorData) {
    return <div>해당 층을 찾을 수 없습니다.</div>;
  }

  const roomData = floorData.rooms.find((r) => r.name === room);

  if (!roomData) {
    return <div>해당 강의실을 찾을 수 없습니다.</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{`${building.name} - ${floor} - ${room}`}</h1>
      <p
        style={styles.directions}
        dangerouslySetInnerHTML={{ __html: roomData.directions }}
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  directions: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
    whiteSpace: 'pre-line',
  },
};

export default RoomPage;
