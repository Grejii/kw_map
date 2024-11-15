// Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={styles.layout}>
      <header style={styles.header}></header> {/* 상단 배너 */}
      <main style={styles.main}>{children}</main>
      <footer style={styles.footer}>
        <p></p>
      </footer>
    </div>
  );
};

const styles = {
  layout: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F9F5F6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#800020', // 버건디 색상 배경
    height: '30px', // 배너 높이
    width: '100%', // 전체 너비
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // 약간의 그림자 추가
  },
  main: {
    flex: 1,
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  footer: {
    backgroundColor: '#800020',
    color: '#FFFFFF',
    padding: '17px',
    textAlign: 'center',
  },
};

export default Layout;
