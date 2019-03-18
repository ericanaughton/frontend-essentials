import React from 'react';
import { movieData } from '../mock-data.js';

function AllMovies() {
  return (
    <div>
      {movieData.map(movie => (
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

export default AllMovies;
