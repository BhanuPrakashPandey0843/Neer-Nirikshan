'use client';
import React from 'react';

const Navbar = () => {
  return (
    <div style={{
      backgroundColor: '#eff2f7ff',
      color: '#fff',
      padding: '1rem 2rem',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
        Neer Nirikshan
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
