// BuildingPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import buildings from './buildings';
import Layout from './components/Layout';

const BuildingPage = () => {
  const { id } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));

  if (!building) {
    return <div>해당 건물을 찾을 수 없습니다.</div>;
  }

  return (
    <Layout>
      <div style={styles.buildingContainer}>
        <img src={building.image} alt={building.name} style={styles.buildingImage} />
        <h2 style={styles.title}>{building.name}</h2>
        <div style={styles.floorList}>
          {building.floors.map((floor, index) => (
            <Link
              key={index}
              to={`/building/${building.id}/floor/${floor.floor}`}
              style={styles.floorCard}
            >
              <h3>{floor.floor}</h3>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  buildingContainer: {
    backgroundColor: '#F7F7F7', // 연한 회색 배경
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  buildingImage: {
    width: '500px',
    height: '500px',
    borderRadius: '8px',
    objectFit: 'cover',
    margin: '0 auto 20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#800020',
    marginBottom: '20px',
  },
  floorList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2열 고정
    gap: '15px',
    marginTop: '20px',
  },
  floorCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    textDecoration: 'none',
    color: '#800020',
    fontSize: '18px',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

export default BuildingPage;
