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
