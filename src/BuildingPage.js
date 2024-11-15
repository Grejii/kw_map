// BuildingPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import buildings from './buildings';
import Layout from './components/Layout';

const BuildingPage = () => {
  const { id } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building) {
    return (
      <Layout>
        <h2>해당 건물을 찾을 수 없습니다.</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 style={styles.heading}>{building.name}</h2>
      <img
        src={`/images/building${building.id}.jpg`}
        alt={building.name}
        style={{
          width: '500px',
          height: '500px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      />
      <div style={styles.floorList}>
        {building.floors.map((floor, index) => (
          <Link
            to={`/building/${building.id}/floor/${index + 1}`}
            key={index}
            style={styles.floorCard}
          >
            <h3>{`${index + 1} 층`}</h3>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

const styles = {
  heading: {
    color: '#800020',
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  floorList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)', // 2열 레이아웃 고정
    gap: '15px',
  },
  floorCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#F9F5F6',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#800020',
    fontSize: '18px',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default BuildingPage;
