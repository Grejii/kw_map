// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <div style={styles.bannerTop}></div>
      <div style={styles.container}>{children}</div>
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
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
  },
};

export default Layout;
