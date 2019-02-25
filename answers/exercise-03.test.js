import { developers, doctors } from '../exercises/mock-data.js';

// Calculate the total sum of age for the developers.
it('total sum of the developers should be 131', () => {
  const calculatedAge = developers.reduce((acc, currentDev) => {
    return acc + currentDev.age;
  }, 0);

  // const calculatedAge = developers
  //   .map(developer => developer.age)
  //   .reduce((acc, cv) => acc + cv);
  expect(calculatedAge).toEqual(131);
});

//Using the doctors data set, calculate the number of years each actor played as doctor from year 2000 and above.
it('should convert my doctors data set and filter only for doctors who begin their role year above 2000', () => {
  const callBackFunc = (arr, doctor) => {
    if (doctor.begin > 2000) {
      return [
        ...arr,
        {
          doctorNumber: `#${doctor.number}`,
          playedBy: doctor.actor,
          yearsPlayed: doctor.end - doctor.begin + 1
        }
      ];
    }

    return arr;
  };
  const filteredData = doctors.reduce(callBackFunc, []);

  // const filteredData = doctors
  //   .filter(doctor => doctor.begin > 2000)
  //   .map(doctor => ({
  //     doctorNumber: `#${doctor.number}`,
  //     playedBy: doctor.actor,
  //     yearsPlayed: doctor.end - doctor.begin + 1
  //   }));

  const expected = [
    { doctorNumber: '#9', playedBy: 'Christopher Eccleston', yearsPlayed: 1 },
    { doctorNumber: '#10', playedBy: 'David Tennant', yearsPlayed: 6 },
    { doctorNumber: '#11', playedBy: 'Matt Smith', yearsPlayed: 4 },
    { doctorNumber: '#12', playedBy: 'Peter Capaldi', yearsPlayed: 1 }
  ];

  expect(filteredData).toEqual(expected);
});

//Write a function that takes a string and returns an object representing the character
//count for each letter.Use.reduce to build this object.

it('should count the letters of the string', () => {
  const countLetters = string => {
    const callBackFunc = (accObj, currentCha) => {
      if (currentCha in accObj) {
        accObj[currentCha]++;
        return accObj;
      }
      return { ...accObj, [currentCha]: 1 };
    };

    return string.split('').reduce(callBackFunc, {});
  };
  const expected = {
    q: 2,
    w: 1,
    e: 5,
    d: 1,
    f: 1,
    g: 1
  };
  expect(countLetters('qwedfgeeeeq')).toEqual(expected);
});

//Write a function that takes a string and a target, and returns true or false if the target is present in the string.
//Use.reduce to acomplish this.
it('takes a string and a target, and returns true or false if the target is present', () => {
  const isPresent = (str, target) => {
    return !!str.split('').filter(cha => cha === target).length;
  };

  // const isPresent = (str, target) => {
  //   return str.split('').reduce((hasTarget, cha) => {
  //     console.log(cha);
  //     if (cha === target) {
  //       hasTarget = true;
  //     }
  //     hasTarget = false;
  //     return hasTarget;
  //   }, false);
  // };
  expect(isPresent('abesedfgbbb', 'f')).toEqual(true);
});
