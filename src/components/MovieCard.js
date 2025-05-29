 
import React from 'react';
import '../styles/MovieCard.css';

function MovieCard(props) {
  return React.createElement(
    'div',
    { className: 'movie-card' },
    React.createElement('img', { src: props.image, alt: props.title }),
    React.createElement('h3', null, props.title)
  );
}

export default MovieCard;
