import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement(
      'div',
      { className: 'footer-content' },
      React.createElement('p', null, `© ${year} MovieZone. All rights reserved.`),
      React.createElement(
        'div',
        { className: 'social-icons' },
        React.createElement(
          'a',
          { href: 'https://facebook.com', target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Facebook' },
          React.createElement('i', { className: 'fab fa-facebook-f' })
        ),
        React.createElement(
          'a',
          { href: 'https://twitter.com', target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Twitter' },
          React.createElement('i', { className: 'fab fa-twitter' })
        ),
        React.createElement(
          'a',
          { href: 'https://instagram.com', target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Instagram' },
          React.createElement('i', { className: 'fab fa-instagram' })
        )
      )
    )
  );
}

export default Footer;
