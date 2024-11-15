// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import buildings from './buildings';
import Layout from './components/Layout';

const MainPage = () => {
  return (
    <Layout>
      <h1 style={styles.title}>광운대학교 건물 안내</h1>
      <div style={styles.buildingList}>
        {buildings.map((building) => (
          <Link to={`/building/${building.id}`} key={building.id} style={styles.buildingCard}>
            <h3>{building.name}</h3>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

const styles = {
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#800020',
    textAlign: 'center',
    marginBottom: '20px',
  },
  buildingList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 항상 2열 고정
    gap: '15px',
  },
  buildingCard: {
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
    minWidth: '0', // 카드 크기 자동 조정
  },
};

export default MainPage;
