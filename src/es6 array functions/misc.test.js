// find method
// this operates on Arrays
// find method takes a callBack function
// callBack function takes element, idx, array
// what find does is, it goes through the array elements and try to match the first item for the given condition.
// it returns the item itself

const people = [
  {
    id: 1,
    first_name: 'Sabra',
    last_name: 'Sealey'
  },
  {
    id: 2,
    first_name: 'Caryl',
    last_name: 'Stonard'
  },
  {
    id: 3,
    first_name: 'Tandi',
    last_name: 'Oakton'
  },
  {
    id: 4,
    first_name: 'Valaree',
    last_name: "O' Sullivan"
  },
  {
    id: 5,
    first_name: 'Audi',
    last_name: 'Folland'
  }
];

it('find the person whose last name is Folland', () => {
  const expected = {
    id: 5,
    first_name: 'Audi',
    last_name: 'Folland'
  };

  expect(people.find(person => person.last_name === 'Folland')).toEqual(
    expected
  );
});

//some method
// some takes a callBack function just like find
// callBack function itself has the same properties as find callBakc function
// only difference is some returns true or false
it('check whether the people array has a person whose name is Folland', () => {
  expect(people.some(person => person.last_name === 'Folland')).toEqual(true);
});

const movies = [
  {
    id: 1,
    movie: 'Schlussmacher',
    time: '3:14 PM'
  },
  {
    id: 2,
    movie: 'Fuck',
    time: '2:33 PM'
  },
  {
    id: 3,
    movie: 'Snow Beast ',
    time: '9:48 PM'
  },
  {
    id: 4,
    movie: 'Man with One Red Shoe, The',
    time: '9:17 PM'
  },
  {
    id: 5,
    movie: 'Forgiving Dr. Mengele',
    time: '5:28 PM'
  }
];

//find a movie that starts after 9pm
it('return move that start after 9pm', () => {
  const rearrangedArr = movies.map(movie => ({
    ...movie,
    time: new Date(`February 12, 2019 ${movie.time}`)
  }));

  console.log(rearrangedArr);

  const findMovie = rearrangedArr.find(
    movie => movie.time > new Date('February 12, 2019 21:00:00')
  );

  console.log(findMovie);

  const expected = {
    id: 4,
    movie: 'Man with One Red Shoe, The',
    time: '9:17 PM'
  };
  expect(findMovie).toEqual(expected);
});
