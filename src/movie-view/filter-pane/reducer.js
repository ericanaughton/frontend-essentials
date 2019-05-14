import actions from './actions';
import { addOrRemoveFromArray } from '../../util/util';

const initialState = {
  genre: [],
  time: null,
  rating: null
};

const FilterPaneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY': {
      if (action.name === 'genre') {
        const temp = state.genre;

        return { ...state, genre: addOrRemoveFromArray(temp, action.field) };
      }
      return { ...state, [action.name]: action.field };
    }
    default:
      return state;
  }
};

export default FilterPaneReducer;
