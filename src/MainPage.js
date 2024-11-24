import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Building1 from './buildings/Building1';
import Building2 from './buildings/Building2';
import Building3 from './buildings/Building3';
import Building4 from './buildings/Building4';
import Building5 from './buildings/Building5';
import Building6 from './buildings/Building6';
import Building7 from './buildings/Building7';
import Building8 from './buildings/Building8';
import Building9 from './buildings/Building9';
import Building10 from './buildings/Building10';
import Building11 from './buildings/Building11';
import Building12 from './buildings/Building12';
import Building13 from './buildings/Building13';

const buildings = [
  Building1,
  Building2,
  Building3,
  Building4,
  Building5,
  Building6,
  Building7,
  Building8,
  Building9,
  Building10,
  Building11,
  Building12,
  Building13,
];

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState(buildings);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 0) {
      const results = buildings.flatMap((building) =>
        building.floors
          .filter((floor) =>
            floor.rooms?.some((room) => room.toLowerCase().includes(query))
          )
          .map((floor) => ({
            buildingId: building.id,
            buildingName: building.name,
            floorNumber: floor.floor,
          }))
      );
      setFilteredResults(results);
    } else {
      setFilteredResults(buildings); // 검색어가 비어 있으면 모든 건물 표시
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>광운대학교 건물 안내</h1>
      <input
        type="text"
        placeholder="강의실 이름 검색"
        value={searchQuery}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      <div style={styles.resultsList}>
        {searchQuery.length === 0 &&
          buildings.map((building) => (
            <Link
              key={building.id}
              to={`/building/${building.id}`}
              style={styles.resultCard}
            >
              <h3>{building.name}</h3>
            </Link>
          ))}
        {searchQuery.length > 0 &&
          filteredResults.map((result, index) => (
            <Link
              key={index}
              to={`/building/${result.buildingId}/floor/${result.floorNumber}`}
              style={styles.resultCard}
            >
              <h3>
                {result.buildingName} - {result.floorNumber}
              </h3>
            </Link>
          ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#800020',
    textAlign: 'center',
    marginBottom: '20px',
  },
  searchInput: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  resultsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // 항상 2열로 표시
    gap: '15px',
  },
  resultCard: {
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

export default MainPage;
