const actions = {
  onFilter: (name, field) => ({
    type: 'FILTER_BY',
    name,
    field
  })
};

export default actions;
