const arrayToObject = (arr, key) =>
  arr.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {});

export { arrayToObject };
