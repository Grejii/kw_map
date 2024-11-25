import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import buildings from './buildings';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // 검색 처리 함수
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      return []; // 검색어가 없으면 빈 배열 반환
    }

    return buildings.flatMap((building) =>
      building.floors.flatMap((floor) =>
        (floor.rooms || []) // rooms가 존재하는지 확인
          .filter((room) =>
            room.name && // room.name이 정의되었는지 확인
            room.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((room) => ({
            buildingId: building.id,
            buildingName: building.name,
            floor: floor.floor,
            roomName: room.name,
          }))
      )
    );
  };

  const searchResults = handleSearch();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>광운대학교 건물 안내</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="강의실 이름을 검색하세요"
        style={styles.searchInput}
      />
      <div style={styles.buildingList}>
        {searchQuery.trim()
          ? searchResults.map((result, index) => (
              <Link
                key={index}
                to={`/building/${result.buildingId}/floor/${result.floor}`}
                style={styles.buildingCard}
              >
                <h3>
                  {result.buildingName} - {result.floor} - {result.roomName}
                </h3>
              </Link>
            ))
          : buildings.map((building) => (
              <Link
                key={building.id}
                to={`/building/${building.id}`}
                style={styles.buildingCard}
              >
                <h3>{building.name}</h3>
              </Link>
            ))}
      </div>
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
    color: '#800020',
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    fontSize: '16px',
    width: '80%',
    maxWidth: '400px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  buildingList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
  },
  buildingCard: {
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
