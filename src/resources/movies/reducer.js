import { arrayToObject } from '../../util/util';
import { movies } from './mock-data';

const initialState = {
  byId: {}
};

const actions = {
  actionName: parameter => ({
    type: 'ACTION_NAME',
    parameter
  })
};

const currentDate = new Date();
const date = `${currentDate.getMonth()} ${currentDate.getDate()} ${currentDate.getFullYear()}`;
const convertededDataSet = movies.map(movie => ({
  ...movie,
  time: new Date(`${date} ${movie.time}`),
  genres: movie.genre.split('|')
}));

const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY': {
      // state.movies.byId.genres.includes(action.genre);
    }

    default:
      return {
        byId: {
          ...arrayToObject(convertededDataSet, 'id')
        }
      };
  }
};

export default MoviesReducer;
