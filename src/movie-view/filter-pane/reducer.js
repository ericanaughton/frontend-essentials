import actions from './actions';

const initialState = {
  genres: null,
  time: null,
  rating: null
};

const FilterPaneReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_BY': {
      return { ...state, [action.name]: action.field };
    }
    default:
      return state;
  }
};

export default FilterPaneReducer;
