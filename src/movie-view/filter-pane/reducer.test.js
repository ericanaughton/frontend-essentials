import FilterPaneReducer from './reducer';
import actions from './actions';

const initialState = {
  time: null,
  genre: null,
  rating: null
};
describe('FilterPaneReducer', () => {
  it('should return initialState', () => {
    expect(FilterPaneReducer(undefined, {})).toEqual(initialState);
  });

  it('actions.onFilter should handle sorting', () => {
    const state = {
      genre: 'romance'
    };

    const expected = {
      genre: 'comedy'
    };

    const action = actions.onFilter('genre', 'comedy');

    expect(FilterPaneReducer(state, action)).toEqual(expected);
  });
});
