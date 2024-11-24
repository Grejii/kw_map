import React from "react";
import { useParams } from "react-router-dom";
import Building1 from "./buildings/Building1";
import Building2 from "./buildings/Building2";
import Building3 from "./buildings/Building3";
import Building4 from "./buildings/Building4";
import Building5 from "./buildings/Building5";

const buildings = [Building1, Building2, Building3, Building4, Building5];

const RoomPage = () => {
  const { id, floor, room } = useParams();
  const building = buildings.find((b) => b.id === parseInt(id));
  const floorInfo = building?.floors.find((f) => f.floor === floor);
  const roomInfo = floorInfo?.rooms.find((r) => r.name === room);

  if (!building || !floorInfo || !roomInfo) {
    return <div>해당 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        {building.name} - {floorInfo.floor} - {roomInfo.name}
      </h2>
      <p style={styles.directions}>{roomInfo.directions}</p>
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
  directions: {
    fontSize: "18px",
    color: "#333",
    marginTop: "20px",
  },
};

export default RoomPage;
