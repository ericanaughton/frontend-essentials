export const movieData = [
  {
    id: 1,
    movie: 'Slap Shot',
    date: '4/7/2019',
    time: '8:37 PM',
    address: '37 Kropf Junction'
  },
  {
    id: 2,
    movie: 'Carson City',
    date: '12/12/2019',
    time: '2:37 PM',
    address: '2 Ridgeview Point'
  },
  {
    id: 3,
    movie: 'Soldier of Fortune',
    date: '9/30/2019',
    time: '8:45 PM',
    address: '518 American Point'
  },
  {
    id: 4,
    movie: 'Children of Heaven, The (Bacheha-Ye Aseman)',
    date: '2/8/2019',
    time: '8:37 PM',
    address: '6354 Hooker Hill'
  },
  {
    id: 5,
    movie: 'Perfect Human, The (Perfekte Menneske, Det)',
    date: '3/20/2019',
    time: '3:32 PM',
    address: '07223 Eastwood Plaza'
  }
];

// 4. From the movie data set find a movie which will air on 12/12/2019 and after 2.00pm. Return the theater address for that movie

it('should find a movie that airs on 12/12/2019 and after 2pm, and returns the address', () => {
  // add new property that converts date and time
  const newDateTimeMovies = movieData.map(movie => ({
    ...movie,
    dateTime: new Date(`${movie.date} ${movie.time}`)
  }));
  // console.log('newDateTimeMovies', newDateTimeMovies);

  // find the movie that matches requirements
  const selectedMovie = newDateTimeMovies.find(
    movie =>
      movie.dateTime >
      new Date('Thu Dec 12 2019 14:00:00 GMT-0600 (Central Standard Time)')
  );
  // console.log('SelectedMovie', selectedMovie);

  // return the address of movie

  // console.log('final address', selectedMovie.address);

  expect(selectedMovie.address).toEqual('2 Ridgeview Point');
});

// 5. For the movie data set array check whether there is any movie that shows on 3/20/2019

it('should check if there is a movie that shown on 3/20/2019', () => {
  // convert date - dont need time
  const newDateMovies = movieData.map(movie => ({
    ...movie,
    date: new Date(`${movie.date}`)
  }));
  // console.log('newDateMovies', newDateMovies);

  // check if any movie has the correct date
  const checkMovies = newDateMovies.some(
    movie =>
      movie.date ===
      new Date('Wed Mar 20 2019 00:00:00 GMT-0500 (Central Daylight Time)')
  );

  // console.log('final check', checkMovies);
  // this is returning false, when it should be true
  expect(checkMovies(newDateMovies)).toEqual(true);
});
