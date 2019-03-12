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

  //console.log(rearrangedArr);

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

//slice function
/** - Returns a poriton of the array as a second array
- It doesn't modify the orginal array. 
- First argument specifies the starting element of those we want to extract
- Second argument specifies the ending argument
- The first & second argument is optional
- What it means is taking everything after the first argument
*/

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
const subset1 = arr.slice(2, 3);
const subset2 = arr.slice(3, 6);
const subset3 = arr.slice(6);
it('arr.slice(2,3) should return c,d', () => {
  expect(subset1).toEqual(['c']);
});

it('arr.slice(3,6) should equal to subset2', () => {
  //console.log('original array in slice', arr);
  expect(subset2).toEqual(['d', 'e', 'f']);
});

it('arr.slice(6) should give me elements from idx6 to end of the array', () => {
  expect(subset3).toEqual(['g', 'h', 'j', 'k']);
});

/**
 * Splice
 - Modifies the array on which it is invoked
- The first argument specifies the array position for insertion and deletion
- The second argument indicates the number of elements to delete
- The deleted elements are returned as an array
- The second arg is optional
- If you did not mention the second argument, it deleted everything from the mentioned idx to the end of the array
 */

it('should delete 3 items from arr from the position of 1', () => {
  const baz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
  const foo = baz.splice(1, 3);
  const deletedItems = ['b', 'c', 'd']; //these are my deleted items
  //console.log('original array in splice', arr);

  expect(foo).toEqual(deletedItems);
});

it('splice function when the second argument is not provided', () => {
  const baz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
  const foo = baz.splice(2);
  const deletedItems = ['c', 'd', 'e', 'f', 'g', 'h', 'j', 'k']; //these are my deleted items
  // console.log('baz', baz);
  const foo1 = baz.splice(6);

  expect(foo).toEqual(deletedItems);
  expect(foo1).toEqual([]);
});

it('splice function is able to add items to a given position', () => {
  const baz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
  const foo = baz.splice(3, 0, 1, 2, 3);

  const expected = ['a', 'b', 'c', 1, 2, 3, 'd', 'e', 'f', 'g', 'h', 'j', 'k'];

  expect(baz).toEqual(expected);
});

it('splice can add and delete add the same time', () => {
  const baz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
  const foo = baz.splice(3, 2, 12, 13, 14);

  const deletedItems = ['d', 'e'];
  const modifiedBaz = ['a', 'b', 'c', 12, 13, 14, 'f', 'g', 'h', 'j', 'k'];

  expect(modifiedBaz).toEqual(baz);
  expect(foo).toEqual(deletedItems);
});

//Write a JavaScript function to remove a specific element from an array.
//console.log(removeArrayElement([2, 5, 9, 6], 5));
//const removeArrayElement = (arr, item) => return array
//don't use filter, find, some any of the fancy functions

it('removeArrayElement should remove given element from the array', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
  const expectedArray = ['a', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];

  const removeArrayElement = (arr, item) => {
    //deduction what method to use - splice
    // find the idx of the targeted item
    const idx = arr.findIndex(element => element === item);
    arr.splice(idx, 1);
    return arr;
  };

  expect(removeArrayElement(arr, 'b')).toEqual(expectedArray);
});

//Write a JavaScript function to add a specific element to the given array and for a given position.
//const addToArray = (arr, item, targetPosition) => return array
//don't use filter, find, some any of the fancy functions

it('should add new item to the given array and position', () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
  const expected = ['a', 'b', 'foo', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k'];
  const addToArray = (arr, item, targetPosition) => {
    arr.splice(targetPosition, 0, item);
    return arr;
  };

  expect(addToArray(arr, 'foo', 2)).toEqual(expected);
});
