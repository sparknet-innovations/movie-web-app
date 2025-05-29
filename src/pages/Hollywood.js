import React from 'react';
import '../styles/Hollywood.css';

const hollywoodMovies = [
  {
    title: "Inception",
    year: 2010,
    rating: "8.8",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: "9.0",
    description: "Batman faces the Joker, a criminal mastermind wreaking havoc in Gotham.",
    img: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: "8.6",
    description: "A team travels through a wormhole in space to ensure humanity's survival.",
    img: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: "9.3",
    description: "Two imprisoned men form an unlikely friendship.",
    img: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: "8.9",
    description: "The final battle for Middle-earth begins.",
    img: "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg"
  },
  {
    title: "Pulp Fiction",
    year: 1994, 
    rating: "8.9",
    description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine.",
    img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
  }
];

function Hollywood() {
  return React.createElement(
    'div',
    { className: 'hollywood-page' },
    React.createElement('h2', null, 'Hollywood Movies'),
    React.createElement(
      'div',
      { className: 'movie-grid' },
      hollywoodMovies.map((movie, index) =>
        React.createElement(
          'div',
          { key: index, className: 'movie-card' },
          React.createElement('img', { src: movie.img, alt: movie.title }),
          React.createElement('h3', null, movie.title),
          React.createElement('p', { className: 'year-rating' }, `${movie.year} | Rating: ${movie.rating}`),
          React.createElement('p', { className: 'description' }, movie.description)
        )
      )
    )
  );
}

export default Hollywood;
