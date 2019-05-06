import React from 'react';
import { connect } from 'react-redux';
import './details.css';
import FilterPane from './filter-pane/filter-pane';

const mapStateToProps = state => ({
  movies: state.movies.byId
});
const Details = ({ movies }) => (
  <div class="container">
    <FilterPane />
    <div class="movies-container">
      {Object.values(movies).map(movie => (
        <div class="movieBox" key={movie.id}>
          {movie.title}
        </div>
      ))}
    </div>
  </div>
);
export default connect(mapStateToProps)(Details);
