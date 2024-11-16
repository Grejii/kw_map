// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import buildings from './buildings';

const MainPage = () => {
  return (
    <div>
      <div style={styles.bannerTop}></div>
      <div style={styles.container}>
        <h1 style={styles.title}>광운대학교 건물 안내</h1>
        <div style={styles.buildingList}>
          {buildings.map((building) => (
            <Link key={building.id} to={`/building/${building.id}`} style={styles.buildingCard}>
              <h3>{building.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div style={styles.bannerBottom}></div>
    </div>
  );
};

const styles = {
  bannerTop: {
    height: '30px',
    backgroundColor: '#800020', // 버건디 색상
  },
  bannerBottom: {
    height: '30px',
    backgroundColor: '#800020', // 버건디 색상
  },
  container: {
    backgroundColor: '#F7F7F7', // 약한 회색 배경
    margin: '0 auto',
    padding: '20px',
    maxWidth: '800px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '36px', // 제목 크기 조정
    fontWeight: 'bold',
    color: '#800020',
    textAlign: 'center',
    margin: '20px 0',
  },
  buildingList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 2열 고정
    gap: '15px',
  },
  buildingCard: {
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

export default MainPage;
