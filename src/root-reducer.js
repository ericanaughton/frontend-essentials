import { combineReducers } from 'redux';
import PageReducer from './movie-view';
import MoviesReducer from './resources/movies';

export default combineReducers({
  page: PageReducer,
  movies: MoviesReducer
});
