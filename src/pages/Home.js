import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return React.createElement(
    'div',
    { className: 'home-page' },
    React.createElement(
      'section',
      { className: 'hero-section' },
      React.createElement(
        'div',
        { className: 'hero-text-container' },
        React.createElement('h1', null, '🎬 Welcome to MovieZone'),
        React.createElement('p', null, 'Explore Bollywood, Hollywood, South Indian, and Animated Movies')
      )
    ),
    React.createElement(
      'section',
      { className: 'categories-section' },
      React.createElement('h2', null, 'Browse by Category'),
      React.createElement(
        'div',
        { className: 'category-grid' },
        React.createElement(
          'div',
          {
            className: 'category-card bollywood',
            onClick: () => navigate('/bollywood'),
            style: { cursor: 'pointer' }
          },
          React.createElement('h3', null, 'Bollywood')
        ),
        React.createElement(
          'div',
          {
            className: 'category-card hollywood',
            onClick: () => navigate('/hollywood'),
            style: { cursor: 'pointer' }
          },
          React.createElement('h3', null, 'Hollywood')
        ),
        React.createElement(
          'div',
          {
            className: 'category-card south',
            onClick: () => navigate('/south'),
            style: { cursor: 'pointer' }
          },
          React.createElement('h3', null, 'South Indian')
        ),
        React.createElement(
          'div',
          {
            className: 'category-card animated',
            onClick: () => navigate('/animated'),
            style: { cursor: 'pointer' }
          },
          React.createElement('h3', null, 'Animated')
        )
      )
    )
  );
}

export default Home;
