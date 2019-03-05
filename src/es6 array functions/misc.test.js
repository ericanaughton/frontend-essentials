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

  const expected = {
    id: 3,
    movie: 'Snow Beast ',
    time: new Date('2019-02-13T03:48:00.000Z')
  };
  expect(findMovie).toEqual(expected);
});

//every function
// it only operates on arrays.
// every function takes callback function
// your callback function is a predicate
// it goes through all your items to see if the given predicate function is passed
const employees = [
  {
    id: 1,
    first_name: 'Danette',
    last_name: 'MacGiany',
    car: 1990
  },
  {
    id: 2,
    first_name: 'Stefania',
    last_name: 'Delatour',
    car: 1996
  },
  {
    id: 3,
    first_name: 'Roana',
    last_name: 'Easthope',
    car: 1994
  },
  {
    id: 4,
    first_name: 'Giacopo',
    last_name: 'Trinder',
    car: 1984
  },
  {
    id: 5,
    first_name: 'Trenton',
    last_name: 'Asken',
    car: 1986
  }
];

it('check if each employee has a new car', () => {
  expect(employees.every(employee => employee.car < 2017)).toEqual(true);
});

//includes
//includes also operate on arrays
//to use this your items in the array should be very staright forward

const animals = ['dog', 'cat', 'tiger', 'elephant'];
//console.log(animals.includes('tiger'));
// can't use for following type arrays
// const animals2 = [
//   {
//     type: 'dog',
//     id: 112
//   },
//   {
//     type: 'cat',
//     id: 113
//   }
// ];

// animals2.includes('dog');

//from function
// this operates on Array like iterable objects
// from function takes array like object, map function

//benefits
// convert a string to an array
const foo = 'hello';
Array.from(foo); // ['h', 'e', 'l','l','o]

const bar = {
  length: 10
};

const baz = Array.from(bar, (x, idx) => idx + 2);

console.log(baz);
