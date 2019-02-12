import { developers, doctors } from '../exercises/mock-data';

// 1. Calculate the total sum of age for the developers.
//    Use mock data developers data set.

it('should calculate the total sum of ages for developers', () => {
  const developerAges = developers.map(developer => developer.age);

  // console.log('ages', developerAges);

  const callBack = (acc, developer) => acc + developer;

  // console.log('Callback', callBack);
  // console.log('total age', developerAges.reduce(callBack));

  expect(developerAges.reduce(callBack)).toEqual(131);
});

// 2. Using the doctors data set, calculate the number of years each actor played as doctor from year 2000 and above.
// Desired output

//   ```js
// const filteredData = [
//   { doctorNumber: '#9', playedBy: 'Christopher Eccleston', yearsPlayed: 1 },
//   { doctorNumber: '#10', playedBy: 'David Tennant', yearsPlayed: 6 },
//   { doctorNumber: '#11', playedBy: 'Matt Smith', yearsPlayed: 4 },
//   { doctorNumber: '#12', playedBy: 'Peter Capaldi', yearsPlayed: 1 }
// ];
// ```

it('should calculate number of years each actor played as dr from 2000+', () => {
  const expected = [
    { doctorNumber: '#9', playedBy: 'Christopher Eccleston', yearsPlayed: 1 },
    { doctorNumber: '#10', playedBy: 'David Tennant', yearsPlayed: 6 },
    { doctorNumber: '#11', playedBy: 'Matt Smith', yearsPlayed: 4 },
    { doctorNumber: '#12', playedBy: 'Peter Capaldi', yearsPlayed: 1 }
  ];

  // filter out the doctors played after 2000
  const filteredDoctors = doctors.filter(doctor => doctor.begin >= 2000);
  // console.log('filteredDoctors', filteredDoctors);

  //   //But I can filter the doctors using reduce

  // const callBack = doctors.reduce((accArray, currentDoctor) => {
  //   if (currentDoctor.begin >= 2000) {
  //     return [...accArray, currentDoctor];
  //   }

  //   return accArray;
  // });

  // console.log('filteredDoctors', doctors.reduce(callBack, []));

  // calculate the number between begin and end for each doctor
  // save that total in a property called yearsPlayed
  // const callBack = (yearsPlayed, doctor) => ({
  //   ...doctor,
  //   yearsPlayed: doctor.end - doctor.begin + 1
  // });
  // console.log('callBack', callBack);

  // I'm only returning one doctor, but should return array of doctors
  // Then I need to remove begin and end

  const getTotalYears = filteredDoctors =>
    filteredDoctors.reduce((yearsPlayed, doctor) => ({
      ...doctor,
      yearsPlayed: doctor.end - doctor.begin + 1
    }));

  //   // console.log('final answer', getTotalYears(filteredDoctors));

  expect(getTotalYears(filteredDoctors)).toEqual(expected);
});

// 3. Write a function that takes a string and returns an object representing the character
// count for each letter.Use.reduce to build this object.

// ```js
// ex.countLetters('abbcccddddeeeee'); // => {a:1, b:2, c:3, d:4, e:5}
// const countLetters = string => {
//   // your code here
// };
// ```

it('should take a string and return an object with the count of each letter', () => {
  const expected = { a: 1, b: 2, c: 3, d: 4, e: 5 };

  const string = 'abbcccddddeeeee';

  // First split the string into an array of strings
  // Then use reduce to count the occurrence of each letter

  // console.log('split', string.split(''));

  // const callBack = ((count, letter) => {
  //   !letter[count] ? (letter[count] = 1) : letter[count]++;
  // },
  // {});

  // console.log('callBack', callBack);

  // const countLetters = string.split('').reduce(callBack);

  // console.log('countLetters', countLetters);

  // console.log('final answer', countLetters(string));

  //   const countLetters = string =>
  //     string.split('').reduce((accLetters, letter) => {
  //       if (letter in accLetters) {
  //         accLetters[letter]++;
  //       } else {
  //         accLetters[letter] = 1;
  //       }
  //       return accLetters;
  //     }, {});

  const countLetters = string =>
    string
      .split('')
      .reduce(
        (count, letter) => ({ ...count, [letter]: count[letter] + 1 || 1 }),
        {}
      );

  //   console.log('final answer', countLetters(string));

  expect(countLetters(string)).toEqual(expected);
});

// 4. Write a function that takes a string and a target, and returns true or false if the target is present in the string.
//   Use.reduce to acomplish this.

// ```js
// // ex. isPresent('abcd', 'b') // => true
// // ex. isPresent('efghi', 'a') // => false
// const isPresent = (string, target) => {
//   //code here
// };
// ```

it('should take a string and a target, return true if string is present', () => {
  const string = 'abcd';
  const target = 'b';

  //   // First split the string into an array of strings
  // console.log('split', string.split(''));
  //   Then check if the target is present
  // If the target is present, then return true
  // If the target is not present, return false

  const isPresent = (string, target) =>
    string.split('').reduce((hasTarget, currentLetter) => {
      if (currentLetter === target) {
        hasTarget = hasTarget || true;
      }
      return hasTarget;
    }, false);

  // console.log('final answer', isPresent(string, target));

  expect(isPresent(string, target)).toEqual(true);
});
