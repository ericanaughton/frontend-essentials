const movies = [
  {
    id: 1,
    title: 'Betty',
    genre: 'Drama',
    theater_address: '88 Mayer Road',
    time: '12:24 PM',
    show_date: '1/10/2019',
    stars: 1
  },
  {
    id: 2,
    title: 'Smash His Camera',
    genre: 'Documentary',
    theater_address: '72 Buell Road',
    time: '7:43 PM',
    show_date: '1/6/2019',
    stars: 4
  },
  {
    id: 3,
    title: 'Thunder Bay',
    genre: 'Adventure',
    theater_address: '24 Veith Pass',
    time: '11:32 AM',
    show_date: '2/23/2019',
    stars: 4
  },
  {
    id: 4,
    title: 'Burning Plain, The',
    genre: 'Drama|Romance',
    theater_address: '0 Banding Park',
    time: '8:05 PM',
    show_date: '2/19/2019',
    stars: 3
  },
  {
    id: 5,
    title: 'Some Girl',
    genre: 'Comedy|Drama',
    theater_address: '282 Buell Plaza',
    time: '11:59 AM',
    show_date: '3/6/2019',
    stars: 4
  }
];

// #1
it('moviesBasedOnRating function should return movies for a given rating', () => {
  const moviesBasedOnRating = (arr, rating) =>
    arr.filter(movie => movie.stars === rating);
  const expected = [
    {
      id: 1,
      title: 'Betty',
      genre: 'Drama',
      theater_address: '88 Mayer Road',
      time: '12:24 PM',
      show_date: '1/10/2019',
      stars: 1
    }
  ];

  expect(moviesBasedOnRating(movies, 1)).toEqual(expected);
});

// #2
it('moviesBasedOnTime function should return for a given show time', () => {
  const currentDate = new Date();
  const date = `${currentDate.getMonth()} ${currentDate.getDate()} ${currentDate.getFullYear()}`;
  const convertedMovies = movies.map(movie => ({
    ...movie,
    time: new Date(`${date} ${movie.time}`)
  }));

  const expected = [
    {
      id: 2,
      title: 'Smash His Camera',
      genre: 'Documentary',
      theater_address: '72 Buell Road',
      time: '7:43 PM',
      show_date: '1/6/2019',
      stars: 4
    },
    {
      id: 4,
      title: 'Burning Plain, The',
      genre: 'Drama|Romance',
      theater_address: '0 Banding Park',
      time: '8:05 PM',
      show_date: '2/19/2019',
      stars: 3
    }
  ].map(movie => ({
    ...movie,
    time: new Date(`${date} ${movie.time}`)
  }));

  const moviesBasedOnTime = (arr, showTime) => {
    const convertedShowTime = new Date(`${date} ${showTime}`);

    return arr.filter(movie => movie.time > convertedShowTime);
  };

  expect(moviesBasedOnTime(convertedMovies, '3:00 PM')).toEqual(expected);
});

// 3.
xit('function for a given genre should return the movie details', () => {
  const expected = [
    {
      id: 1,
      title: 'Betty',
      genre: 'Drama',
      theater_address: '88 Mayer Road',
      time: '12:24 PM',
      show_date: '1/10/2019',
      stars: 1
    },
    {
      id: 4,
      title: 'Burning Plain, The',
      genre: 'Drama|Romance',
      theater_address: '0 Banding Park',
      time: '8:05 PM',
      show_date: '2/19/2019',
      stars: 3
    },
    {
      id: 5,
      title: 'Some Girl',
      genre: 'Comedy|Drama',
      theater_address: '282 Buell Plaza',
      time: '11:59 AM',
      show_date: '3/6/2019',
      stars: 4
    }
  ];

  const moviesBasedOnGenre = (arr, genre) => {
    // First convert the genre's to an array of strings
    // by using split('|')
    // then filter out the movies that includes that genre
    // };

    arr.reduce((accArr, movie) => {
      const genreArr = movie.genre.split('|');
      // console.log('genreArr', genreArr);

      if (genreArr.includes(genre)) {
        return [...accArr, movie];
        // console.log('true');
      }

      return accArr;
      // console.log('false');
    });
  };

  // console.log('moviesBasedOnGenre', moviesBasedOnGenre(movies, 'Drama'));

  expect(moviesBasedOnGenre(movies, 'Drama')).toEqual(expected);
});

// 4. Calculate price for a given number of tickets
xit('should calculate price for given number of tickets', () => {
  const expected = '$47.00';

  const numberOfTickets = { adult: 2, child: 3, senior: 1 };

  const getTotalPrice = numberOfTickets => {
    // use prices mockdata
    // convert prices to integers
    // use replace to remove $
    // use reduce to get total sum
    // iterate through prices
    // accArray = sum of prices
    // current value = price
    // price * numberOfTickets.adult ....
  };

  expect(getTotalPrice(numberOfTickets)).toEqual(expected);
});

// 5. For a given particular time, find the first movie in the list and provide the details as follows
xit('should return the first movie given a specific time', () => {
  const expected = {
    genre: 'Documentary',
    address: '72 Buell Road',
    time: '7:43 PM',
    date: '1/6/2019',
    stars: 4
  };

  const time = '7:00 PM';

  const getMovie = (time = {
    // first convert the movie times and the given time, using new Date
    // save a new property within movie for that converted time
    // then use find to search for the first movie with that time or greater
    // return that movie
  });

  expect(getMovie(time)).toEqual(expected);
});

// 6.Using the movies data set, calculate the number of genres included for movie.
xit('should calculate the number of genres included for each movie', () => {
  // i used the movies const from top of file because it's shorter
  const expected = [
    {
      id: 1,
      title: 'Betty',
      numberOfGenres: 1
    },
    {
      id: 2,
      title: 'Smash His Camera',
      numberOfGenres: 1
    },
    {
      id: 3,
      title: 'Thunder Bay',
      numberOfGenres: 1
    },
    {
      id: 4,
      title: 'Burning Plain, The',
      numberOfGenres: 2
    },
    {
      id: 5,
      title: 'Some Girl',
      numberOfGenres: 2
    }
  ];

  const calculateGenres = movies => {
    // first convert the genre string into array
    // by using split('|')
    // use reduce to count the items in the genreArray
    // create new property called numberOfGenres to store the some in each movie
    // return id, title and numberOfGenres
    // accArray = genreArray
    // currentValue = movie
  };

  expect(calculateGenres(movies)).toEqual(expected);
});

// 7. As the movie got popular, film director decided to pull one of his current movies out from the theater and add an old favorite back to the theaters.
// Reflect the movie list details accordingly
xit('should remove specific movie and add specific movie', () => {
  // const expected =
  // new movie list

  const movieToBeRemoved = {
    id: 2,
    title: 'Smash His Camera'
  };

  const movieToBeAdded = {
    title: 'Charlie Chan in The Chinese Cat',
    genre: 'Adventure',
    theater_address: '24 Veith Pass',
    time: '11:32 AM',
    show_date: '3/23/2019',
    stars: 4
  };

  const newMovieList = (movieToBeRemoved, movieToBeAdded) => {
    // use reduce
    // if movie.id = movieToBeRemoved.id
    // then filter it out of list (return accArray with that movie)
    // use push to add new movie
  };

  expect(newMovieList(movieToBeRemoved, movieToBeAdded)).toEqual(expected);
});

// 8. User has now decided following movies as his favorites, display the movie details in order.

xit('should return the movies in order of selectedMovieIds', () => {
  // const expected = sorted movie details

  const selectedMovieIds = [2, 20, 4, 12];

  const sortedMovies = selectedMovieIds => {
    // use reduce
    // iterate through the selectedMovieIds
    // when a selectedMovieId matches a movie.id
    // then add that movie to a new array
  };

  expect(sortedMovies(selectedMovieIds)).toEqual(expected);
});

// 9. write a function to add specific movie id to the given array

it('should add a specific movie id to the given array', () => {
  const expected = [2, 20, 4, 12, 100];

  const arr = [2, 20, 4, 12];

  const id = 100;

  const newArr = (arr, id) => {
    // push id into new array
  };

  expected(newArr(arr, id)).toEqual(expected);
});
