import React from "react";
import { useParams, Link } from "react-router-dom";
import Building1 from "./buildings/Building1";
import Building2 from "./buildings/Building2";
import Building3 from "./buildings/Building3";
import Building4 from "./buildings/Building4";
import Building5 from "./buildings/Building5";

const buildings = [Building1, Building2, Building3, Building4, Building5];

const FloorPage = () => {
  const { id, floor } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));
  const floorInfo = building?.floors.find((f) => f.floor === floor);

  if (!building || !floorInfo) {
    return <div>해당 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        {building.name} - {floorInfo.floor}
      </h2>
      <ul style={styles.roomList}>
        {floorInfo.rooms.map((room, index) => (
          <li key={index} style={styles.roomItem}>
            <Link to={`/building/${id}/floor/${floor}/room/${room.name}`}>
              {room.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#800020",
  },
  roomList: {
    listStyle: "none",
    padding: 0,
  },
  roomItem: {
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#F9F5F6",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

export default FloorPage;
