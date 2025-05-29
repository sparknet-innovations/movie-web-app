import React from 'react';
import '../styles/Bollywood.css';

const bollywoodMovies = [
  {
    title: "3 Idiots",
    year: 2009,
    rating: "8.4",
    description: "A story about friendship, pressure, and the Indian education system.",
    img: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg"
  },
  {
    title: "Dangal",
    year: 2016,
    rating: "8.4",
    description: "A father trains his daughters to become world-class wrestlers.",
    img: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg"
  },
  {
    title: "Lagaan",
    year: 2001,
    rating: "8.1",
    description: "Villagers play cricket to avoid paying taxes to British rulers.",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg"
  },
  {
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    rating: "8.2",
    description: "Three friends embark on a road trip in Spain.",
    img: "https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg"
  },
  {
    title: "Kabhi Khushi Kabhie Gham",
    year: 2001,
    rating: "7.4",
    description: "A family drama about love, relationships, and values.",
    img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Kabhi_Khushi_Kabhie_Gham..._poster.jpg"
  },
  {
    title: "Chennai Express",
    year: 2013,
    rating: "5.3",
    description: 'chennai Express is a romantic action-comedy film about the journey of characters from Mumbai to Rameswaram.' ,
    img: "https://upload.wikimedia.org/wikipedia/en/1/1b/Chennai_Express.jpg"
  },
  {
    title: "MS Dhoni: The Untold Story",
    year: 2016,
    rating: "7.9",
    description: "A biographical sports drama about the life of cricketer MS Dhoni.",
    img: "https://upload.wikimedia.org/wikipedia/en/3/33/M.S._Dhoni_-_The_Untold_Story_poster.jpg",
  },
];

function Bollywood() {
  return React.createElement(
    'div',
    { className: 'bollywood-page' },
    React.createElement('h2', null, 'Bollywood Movies'),
    React.createElement(
      'div',
      { className: 'movie-grid' },
      bollywoodMovies.map((movie, index) =>
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

export default Bollywood;
