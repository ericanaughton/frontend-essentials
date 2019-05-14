const arrayToObject = (arr, key) =>
  arr.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {});

export { arrayToObject };

export const addOrRemoveFromArray = (arr, newItem, test) => {
  const testOrDefaultTest = test || (item => item === newItem);
  return arr.find(testOrDefaultTest) !== undefined
    ? arr.filter(item => !testOrDefaultTest(item))
    : [...arr, newItem];
};
