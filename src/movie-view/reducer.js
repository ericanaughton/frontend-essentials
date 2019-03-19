const initialState = {};

const actions = {
  actionName: parameter => ({
    type: 'ACTION_NAME',
    parameter
  })
};

const PageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default PageReducer;
export { actions };
