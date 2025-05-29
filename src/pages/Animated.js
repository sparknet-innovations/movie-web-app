import React from 'react';
import '../styles/Animated.css';

const animatedMovies = [
  {
    title: "Toy Story",
    year: 1995,
    rating: "8.3",
    description: "A story about the secret life of toys when humans are not around.",
    img: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
  },
  {
    title: "Spirited Away",
    year: 2001,
    rating: "8.6",
    description: "A young girl navigates a magical world to save her parents.",
    img: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png"
  },
  {
    title: "Coco",
    year: 2017,
    rating: "8.4",
    description: "A boy embarks on a journey to the Land of the Dead to discover his family's history.",
    img: "https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg"
  },
  {
    title: "Finding Nemo",
    year: 2003,
    rating: "8.1",
    description: "A clownfish searches for his son who was captured by a diver.",
    img: "https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg"
  },
  {
    title: "Inside Out",
    year: 2015,
    rating: "8.1",
    description: "The emotions of a young girl help her cope with a new family member.",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg"
  },
  {
    title: "Zootopia",
    year: 2016,
    rating: "8.0",
    description: "A bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
    img: "https://upload.wikimedia.org/wikipedia/en/9/96/Zootopia_%28movie_poster%29.jpg"
  },
  {
    title: "The Lion King",
    year: 1994,
    rating: "8.5",
    description: "A lion prince flees his kingdom after the death of his father.",
    img: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg"
  },
  {
    title: "Up",
    year: 2009,
    rating: "8.2",
    description: "An elderly man sets out to fulfill his lifelong dreams.",
    img: "https://upload.wikimedia.org/wikipedia/en/0/05/Up_%282009_film%29.jpg"
  }
];

function Animated() {
  return React.createElement(
    'div',
    { className: 'animated-page' },
    React.createElement('h2', null, 'Animated Movies'),
    React.createElement(
      'div',
      { className: 'movie-grid' },
      animatedMovies.map((movie, index) =>
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

export default Animated;
