import React from 'react';
import { movieData } from '../mock-data.js';
import './styles.css';

function AllMovies() {
  return (
    <div>
      {movieData.map(movie => (
        <div key={movie.id} className="detailCell">
          <span>Title: {movie.title}</span>
          <span>Genre: {movie.genre}</span>
          <span>Time: {movie.time}</span>
          <span>Address: {movie.theater_address}</span>
        </div>
      ))}
    </div>
  );
}

export default AllMovies;
