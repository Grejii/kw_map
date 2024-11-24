// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={styles.layout}>
      <div style={styles.bannerTop}></div>
      <div style={styles.content}>{children}</div>
      <div style={styles.bannerBottom}></div>
    </div>
  );
};

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', // 화면 전체 높이
  },
  bannerTop: {
    position: 'fixed', // 상단 고정
    top: 0,
    left: 0,
    width: '100%',
    height: '30px',
    backgroundColor: '#800020', // 버건디 색상
    zIndex: 1000, // 항상 위에 표시
  },
  content: {
    marginTop: '30px', // 상단 배너 높이만큼 여백
    marginBottom: '30px', // 하단 배너 높이만큼 여백
    flex: 1, // 남은 공간을 차지
    overflowY: 'auto', // 리스트 스크롤 가능
    padding: '20px',
    backgroundColor: '#F7F7F7', // 연한 회색 배경
  },
  bannerBottom: {
    position: 'fixed', // 하단 고정
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30px',
    backgroundColor: '#800020', // 버건디 색상
    zIndex: 1000, // 항상 위에 표시
  },
};

export default Layout;
