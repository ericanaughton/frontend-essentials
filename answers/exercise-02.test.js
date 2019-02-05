// 1. Write a JavaScript program which accept a number as input and insert dashes(-)
// between each two even numbers.For example if you accept 025468 the output should be 0 - 254 - 6 - 8

it('insertDash should insert dashes in between two even numbers', () => {
  const number = 25468;
  const expected = '254-6-8';
  //convert the number to string
  //split the string to an array
  const newNumber = number.toString().split('');
  console.log('newnumber', newNumber);

  const evenNumbers =
    //check whether two adjacent numbers are even
    newNumber.map((number, index) => {
      if (number % 2 === 0) {
        return index++;
      }
    }

  console.log('evenNumbers', evenNumbers);
  //if so add  a dash

  // console.log(newNumber.map(number => number));

  // console.log('insertDash', insertDash);

  //expect(insertDash(number)).toEqual(expected);
});

// 2. Clone an array, come up with another solution other than map

// 3. Using the mock movieData calculate number of movies where the genre is comedy

// 4. Using the mock movieData filter the movies where the genre is either comedy or fantasy

// 5. Write a JavaScript function to remove a specific element from an array.
//   ex: remove_array_element([2, 5, 9, 6], 5)

// 6. Write a JavaScript function to find an array contains a specific element.
//   ex: contains(arr, 5)
