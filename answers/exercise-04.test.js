// const supports = {
//   textToSpeech: 'Text to Speech',
//   contentClarifiers: 'Content Clarifiers',
//   spellingAssistance: 'Spelling Assistance',
//   spanish: 'Spanish'
// };

// const students = [
//   {
//     id: 1,
//     first_name: 'Daniel',
//     last_name: 'Pottell',
//     supports: {
//       textToSpeech: true,
//       contentClarifiers: true,
//       spellingAssistance: false,
//       spanish: true
//     }
//   },
//   {
//     id: 2,
//     first_name: 'Fayre',
//     last_name: 'Norrie',
//     supports: {
//       textToSpeech: true,
//       contentClarifiers: false,
//       spellingAssistance: true,
//       spanish: true
//     }
//   },
//   {
//     id: 3,
//     first_name: 'Alvie',
//     last_name: 'Gorusso',
//     supports: {
//       textToSpeech: false,
//       contentClarifiers: false,
//       spellingAssistance: false,
//       spanish: false
//     }
//   },
//   {
//     id: 4,
//     first_name: 'Lisha',
//     last_name: 'Bownes',
//     supports: {
//       textToSpeech: true,
//       contentClarifiers: true,
//       spellingAssistance: false,
//       spanish: true
//     }
//   },
//   {
//     id: 5,
//     first_name: 'Fayette',
//     last_name: 'Doctor',
//     supports: {
//       textToSpeech: false,
//       contentClarifiers: false,
//       spellingAssistance: false,
//       spanish: false
//     }
//   }
// ];

// // 1. For the given data set below,write a function which returns an array
// //    of supports that has been turned for the student. if the student have no supports turned on return
// //    'none'.

// it('should return array of supports that are turned on', () => {
//   const expected = ['Text to Speech', 'Content Clarifiers', 'Spanish'];

//   const studentSupports = students[1].supports;

//   const turnedOnSupports = studentSupports => {};

//   // this is wrong becausing i'm using the value instead of the key
//   // const turnedOnSupports = studentSupports => {
//   //   Object.values(studentSupports).map(studentSupport => {
//   //     if (studentSupport === true) {
//   //       console.log('true', supports[studentSupport]);
//   //       return supports[studentSupport];
//   //     }
//   //     return 'None';
//   //   });
//   // };

//   // this is wrong because studentSupports is not an array, so cant use reduce
//   // const turnedOnSupports = studentSupports => {
//   // studentSupports.reduce((supportsArray, currentSupport) => {
//   //   if (currentSupport === true) {
//   //     return [...supportsArray, studentSupports[currentSupport]];
//   //   }
//   //   return 'None';
//   // }, []);

//   // console.log(turnedOnSupports(students[1].supports));

//   // if the supports are turned on
//   // return ['Content Clarifiers', 'Spanish' ]
//   //else
//   //return 'None'
//   // };
//   // ex: turnedOnSupports(students[1].supports); // [ 'Text to Speech','Content Clarifiers','Spanish']

//   expect(turnedOnSupports(students[1].supports)).toEqual(expected);
// });

// // 2. Write a function which will take an array and an id. For the given id return the student's full name
// it('should return full name of student', () => {
//   const studentsFullName = (id, arr) => {
//     // join the two strings together
//     const joinName = (firstName, lastName) => {
//       firstName.concat(' ', lastName);
//     };

//     // find student with the id
//     arr.find(student => {
//       if (student.id === id) {
//         return joinName(student.first_name, student.last_name);
//       }
//       return '';
//     });
//   };
//   console.log(studentsFullName(2, students));
//   // ex: studentsFullName(2, students); // Fayre Norrie
//   expect(studentsFullName(2, students)).toEqual('Fayre Norrie');
// });

// // 3. For the given data set below check whether there are any employees whose credit card type is maestro

// const employyes = [
//   {
//     id: 1,
//     first_name: 'Karoline',
//     last_name: 'McWaters',
//     gender: 'Female',
//     credit_card_type: 'jcb'
//   },
//   {
//     id: 2,
//     first_name: 'Fields',
//     last_name: 'Nadin',
//     gender: 'Male',
//     credit_card_type: 'jcb'
//   },
//   {
//     id: 3,
//     first_name: 'Hillyer',
//     last_name: 'Sawley',
//     gender: 'Male',
//     credit_card_type: 'jcb'
//   },
//   {
//     id: 4,
//     first_name: 'Avictor',
//     last_name: 'Baber',
//     gender: 'Male',
//     credit_card_type: 'jcb'
//   },
//   {
//     id: 5,
//     first_name: 'Kelly',
//     last_name: 'Le Clercq',
//     gender: 'Male',
//     credit_card_type: 'maestro'
//   }
// ];

// export const movieData = [
//   {
//     id: 1,
//     movie: 'Slap Shot',
//     date: '4/7/2019',
//     time: '8:37 PM',
//     address: '37 Kropf Junction'
//   },
//   {
//     id: 2,
//     movie: 'Carson City',
//     date: '12/12/2019',
//     time: '2:37 PM',
//     address: '2 Ridgeview Point'
//   },
//   {
//     id: 3,
//     movie: 'Soldier of Fortune',
//     date: '9/30/2019',
//     time: '8:45 PM',
//     address: '518 American Point'
//   },
//   {
//     id: 4,
//     movie: 'Children of Heaven, The (Bacheha-Ye Aseman)',
//     date: '2/8/2019',
//     time: '8:37 PM',
//     address: '6354 Hooker Hill'
//   },
//   {
//     id: 5,
//     movie: 'Perfect Human, The (Perfekte Menneske, Det)',
//     date: '3/20/2019',
//     time: '3:32 PM',
//     address: '07223 Eastwood Plaza'
//   }
// ];

// // 4. From the movie data set find a movie which will air on 12/12/2019 and after 2.00pm. Return the theater address for that movie
// it('should find a movie that airs on 12/12/2019 and after 2pm, and returns the address', () => {
//   // add new property that converts date and time
//   const newDateTimeMovies = movieData.map(movie => ({
//     ...movie,
//     dateTime: new Date(`${movie.date} ${movie.time}`)
//   }));
//   // console.log('newDateTimeMovies', newDateTimeMovies);

//   // find the movie that matches requirements
//   const selectedMovie = newDateTimeMovies.find(
//     movie =>
//       movie.dateTime >
//       new Date('Thu Dec 12 2019 14:00:00 GMT-0600 (Central Standard Time)')
//   );
//   // console.log('SelectedMovie', selectedMovie);

//   // return the address of movie

//   console.log('final address', selectedMovie.address);

//   expect(selectedMovie.address).toEqual('2 Ridgeview Point');
// });

// // 5. For the movie data set array check whether there is any movie that shows on 3/20/2019
// it('should check if there is a movie that shown on 3/20/2019', () => {
//   // convert date - dont need time
//   const newDateMovies = movieData.map(movie => ({
//     ...movie,
//     date: new Date(`${movie.date}`)
//   }));
//   // console.log('newDateMovies', newDateMovies);

//   // check if any movie has the correct date
//   const checkMovies = newDateMovies.some(
//     movie =>
//       movie.date ===
//       new Date('Wed Mar 20 2019 00:00:00 GMT-0500 (Central Daylight Time)')
//   );

//   console.log('final check', checkMovies);
//   // this is returning false, when it should be true
//   expect(checkMovies(newDateMovies)).toEqual(true);
// });
