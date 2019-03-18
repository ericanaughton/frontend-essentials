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
it('function for a given genre should return the movie details', () => {
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
    }, []);
  };

  console.log('moviesBasedOnGenre', moviesBasedOnGenre(movies, 'Drama'));

  expect(moviesBasedOnGenre(movies, 'Drama')).toEqual(expected);
});

// 4. Calculate price for a given number of tickets
// `ex: number of tickets = {adult:2, child:3, senior:1}`

// 5. For a given particular time, find the first movie in the list and provide the details as follows

// ```js
//    //ex: first movie after 7

//    const desiredOutput = {
//      genre: 'Documentary',
//      address: '72 Buell Road',
//      time: '7:43 PM',
//      date: '1/6/2019',
//      stars: 4
//    };
//    ```

// 6.Using the movies data set, calculate the number of genres included for movie.
// Desired output

//     ```js
// const desiredOutput = [
//   {
//     id: 11,
//     title: 'Bel Ami',
//     numberOfGenres: 2
//   },
//   {
//     id: 12,
//     title: 'Vampire in Venice (Nosferatu a Venezia) (Nosferatu in Venice)',
//     numberOfGenres: 1
//   }
// ];
// ```

// 7. As the movie got popular, film director decided to pull one of his current movies out from the theater and add an old favorite back to the theaters.
// Reflect the movie list details accordingly.

// ```js
// const movieToBeRemoved = {
//   id: 2,
//   title: 'Smash His Camera'
// };

// const movieToBeAdded = {
//   title: 'Charlie Chan in The Chinese Cat',
//   genre: 'Adventure',
//   theater_address: '24 Veith Pass',
//   time: '11:32 AM',
//   show_date: '3/23/2019',
//   stars: 4
// };
// ```

// 8. User has now decided following movies as his favorites, display the movie details in order.

// ```
// const selectedMovieIds = [2,20,4,12]

// ```

// 9. write a function to add specific movie id to the given array
