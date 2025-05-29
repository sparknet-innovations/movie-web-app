import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return React.createElement(
    'header',
    { className: 'header' },
    React.createElement('h1', { onClick: () => navigate('/') }, '🎬 MovieZone'),
    React.createElement(
      'nav',
      null,
      React.createElement('button', { onClick: () => navigate('/') }, 'Home'),
      React.createElement('button', { onClick: () => navigate('/bollywood') }, 'Bollywood'),
      React.createElement('button', { onClick: () => navigate('/hollywood') }, 'Hollywood'),
      React.createElement('button', { onClick: () => navigate('/south') }, 'South Indian'),
      React.createElement('button', { onClick: () => navigate('/animated') }, 'Animated')
    )
  );
}

export default Header;
