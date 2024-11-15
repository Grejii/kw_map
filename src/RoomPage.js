// RoomPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './components/Layout';

const RoomPage = () => {
  const { id, floor, room } = useParams();

  return (
    <Layout>
      <h2>{`건물: ${id}, 층: ${floor}, 강의실: ${room}`}</h2>
      <p>여기까지 오는 방법:</p>
      <ul>
        <li>건물 입구에서 엘리베이터를 타세요.</li>
        <li>{`${floor}층으로 이동합니다.`}</li>
        <li>{`강의실 ${room}으로 가세요.`}</li>
      </ul>
    </Layout>
  );
};

export default RoomPage;
