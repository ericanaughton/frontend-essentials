import React from 'react';
import { movieData } from '../mock-data.js';

export const newDateMovies = movieData.filter(movie => movie => ({
  ...movie,
  dateTime: new Date(`${movie.date} ${movie.time}`)
}));

// export const filteredMovies = newDateMovies.filter(

// movie =>
//   // movie.dateTime >
//       // greater or equal to 6pm
//       // new Date('Thu Dec 12 2019 14:00:00 GMT-0600 (Central Standard Time)')
// )

function EveningMovies() {
  return (
    <div>
      {filteredMovies.map(movie => (
        <div key={movie.id}>
          <span>Title: {movie.title}</span>
          <span>Genre: {movie.genre}</span>
          <span>Time: {movie.time}</span>
          <span>Address: {movie.address}</span>
        </div>
      ))}
    </div>
  );
}

export default EveningMovies;
