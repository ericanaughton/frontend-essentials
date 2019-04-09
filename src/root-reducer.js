import { combineReducers } from 'redux';
import PageReducer from './movie-view';
import MoviesReducer from './resources/movies';
import FilterPaneReducer from './movie-view/filter-pane/reducer';

export default combineReducers({
  page: PageReducer,
  movies: MoviesReducer,
  filter: FilterPaneReducer
});
