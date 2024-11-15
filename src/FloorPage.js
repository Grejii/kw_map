// FloorPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import buildings from './buildings';
import Layout from './components/Layout';

const FloorPage = () => {
  const { id, floor } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building || !building.floors[floor - 1]) {
    return <div>해당 층 정보를 찾을 수 없습니다.</div>;
  }

  const floorInfo = building.floors[floor - 1];

  return (
    <Layout>
      <h2>{`${building.name} - ${floor}층`}</h2>
      <ul style={styles.roomList}>
        {floorInfo.split(', ').map((room, index) => (
          <li key={index} style={styles.roomItem}>
            {room}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

const styles = {
  roomList: {
    listStyleType: 'none',
    padding: 0,
  },
  roomItem: {
    marginBottom: '10px',
  },
};

export default FloorPage;
