import MoviesReducer from './reducer';
import filterPaneActions from '../../movie-view/filter-pane/actions';
const initialState = {
  byId: {}
};

describe('MoviesReducer', () => {
  it('should return the initialState', () => {
    expect(MoviesReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the movies by filter selection', () => {
    const state = {
      1: {
        id: 1,
        title: 'Betty',
        genre: 'Drama'
      },
      2: {
        id: 2,
        title: 'Smash His Camera',
        genre: 'Documentary'
      }
    };

    const action = filterPaneActions.FILTER_BY('genres', 'Drama');

    const expected = expect(MoviesReducer(state, action)).toEqual(expected);
  });
});
