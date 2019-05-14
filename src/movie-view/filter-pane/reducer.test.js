import FilterPaneReducer from './reducer';
import actions from './actions';

const initialState = {
  time: null,
  genre: [],
  rating: null
};
describe('FilterPaneReducer', () => {
  it('should return initialState', () => {
    expect(FilterPaneReducer(undefined, {})).toEqual(initialState);
  });

  it.only('actions.onFilter should handle sorting', () => {
    const state = {
      genre: []
    };

    const expected = {
      genre: ['comedy']
    };

    const action = actions.onFilter('genre', 'comedy');

    expect(FilterPaneReducer(state, action)).toEqual(expected);
  });

  it.only('actions.onFilter should handle sorting', () => {
    const state = {
      genre: ['comedy']
    };

    const expected = {
      genre: []
    };

    const action = actions.onFilter('genre', 'comedy');

    expect(FilterPaneReducer(state, action)).toEqual(expected);
  });
});
