import React from "react";
import { useParams } from "react-router-dom";
import Building1 from "./buildings/Building1"; // Building 데이터 가져오기

const FloorPage = () => {
  const { id, floor } = useParams();
  const building = Building1; // Building 데이터를 직접 불러옴
  const selectedFloor = building.floors.find((f) => f.floor === floor);

  if (!selectedFloor) {
    return <div style={styles.error}>해당 층 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        {building.name} - {floor}
      </h2>
      <div style={styles.roomList}>
        {selectedFloor.rooms.map((room, index) => (
          <div key={index} style={styles.roomCard}>
            <h3 style={styles.roomName}>{room.name}</h3>
            <p
              style={styles.directions}
              dangerouslySetInnerHTML={{ __html: room.directions }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#800020",
    marginBottom: "20px",
  },
  roomList: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px",
  },
  roomCard: {
    padding: "15px",
    textAlign: "left",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  roomName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#800020", // 강의실 이름 색상: 버건디
    marginBottom: "10px",
  },
  directions: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#555",
  },
  error: {
    fontSize: "20px",
    color: "#ff0000",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default FloorPage;
