import React from 'react';
import '../styles/South.css';

const southMovies = [
  {
    title: "Baahubali: The Beginning",
    year: 2015,
    rating: "8.0",
    description: "A legendary story of valor and heritage in ancient India.",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg"
  },
  {
    title: "KGF Chapter 1",
    year: 2018,
    rating: "8.2",
    description: "A gangster’s rise to power in the Kolar Gold Fields.",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cc/K.G.F_Chapter_1_poster.jpg"
  },
  {
    title: "Mersal",
    year: 2017,
    rating: "7.8",
    description: "A doctor takes on corruption in the medical field.",
    img: "https://upload.wikimedia.org/wikipedia/en/3/3c/Mersal_film_poster.jpg"
  },
  {
    title: "Arjun Reddy",
    year: 2017,
    rating: "8.1",
    description: "A hot-headed surgeon's life spirals out of control after a breakup.",
    img: "https://upload.wikimedia.org/wikipedia/en/4/46/Arjun_Reddy.jpg"
  },
  {
    title: "Super Deluxe",
    year: 2019,
    rating: "8.4",
    description: "Multiple stories intertwine in a single night in Chennai.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a1/Super_Deluxe_film_poster.jpg"
  },
  {
    title: "Drishyam",
    year: 2013,
    rating: "8.2",
    description : "A family man will go to any lengths to protect his family.",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8a/Drishyam_2015_film.jpg"
  },
  
];

function South() {
  return React.createElement(
    'div',
    { className: 'south-page' },
    React.createElement('h2', null, 'South Indian Movies'),
    React.createElement(
      'div',
      { className: 'movie-grid' },
      southMovies.map((movie, index) =>
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

export default South;
