#### Based on mockdata

### 12/03/2019 mentor time work

prototype https://dribbble.com/shots/4961780-Music-Dashboard-Exploration/attachments/1111975

1. Write a function for a given rating, return the movie details.

```js
const moviesBasedOnRatings = (arr, rating) => {
  //your code
};

/*
moviesBasedOnRatings(moviesArr,3)
desiredOutput = [{
  id: 4,
  title: 'Burning Plain, The',
  genre: 'Drama|Romance',
  theater_address: '0 Banding Park',
  time: '8:05 PM',
  show_date: '2/19/2019',
  stars: 3
  },
  {
    id: 7,
    title: 'Hellgate',
    genre: 'Horror|Thriller',
    theater_address: '217 Namekagon Hill',
    time: '6:27 PM',
    show_date: '2/7/2019',
    stars: 3
  }]
*/
```

2. Write a function for a given show time , return the movie details

```js
const moviesBasedOnTime = (arr, showTime) => {
  //your code
};

/*
movies after 3pm
moviesBasedOnTime(moviesArr,3pm)
desiredOutput = [{
  id: 4,
  title: 'Burning Plain, The',
  genre: 'Drama|Romance',
  theater_address: '0 Banding Park',
  time: '8:05 PM',
  show_date: '2/19/2019',
  stars: 3
  },
  {
    id: 7,
    title: 'Hellgate',
    genre: 'Horror|Thriller',
    theater_address: '217 Namekagon Hill',
    time: '6:27 PM',
    show_date: '2/7/2019',
    stars: 3
  }]
*/
```

3. Write a function for a given genre , return the movie details

```js
const moviesBasedOnGenre = (arr, genre) => {
  //your code
};

/*
moviesBasedOnTime(moviesArr,'horror')
desiredOutput = [
  {
    id: 7,
    title: 'Hellgate',
    genre: 'Horror|Thriller',
    theater_address: '217 Namekagon Hill',
    time: '6:27 PM',
    show_date: '2/7/2019',
    stars: 3
  },
  {
    id: 8,
    title: 'Hellgate 2',
    genre: 'Horror',
    theater_address: '217 Namekagon Hill',
    time: '6:27 PM',
    show_date: '2/7/2019',
    stars: 3
  }]
*/
```

4. Calculate price for a given number of tickets
   `ex: number of tickets = {adult:2, child:3, senior:1}`

5. For a given particular time, find the first movie in the list and provide the details as follows

   ```js
   //ex: first movie after 7

   const desiredOutput = {
     genre: 'Documentary',
     address: '72 Buell Road',
     time: '7:43 PM',
     date: '1/6/2019',
     stars: 4
   };
   ```

6.Using the movies data set, calculate the number of genres included for movie.
Desired output

```js
const desiredOutput = [
  {
    id: 11,
    title: 'Bel Ami',
    numberOfGenres: 2
  },
  {
    id: 12,
    title: 'Vampire in Venice (Nosferatu a Venezia) (Nosferatu in Venice)',
    numberOfGenres: 1
  }
];
```

7. As the movie got popular, film director decided to pull one of his current movies out from the theater and add an old favorite back to the theaters.
   Reflect the movie list details accordingly.

```js
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
```

8. User has now decided following movies as his favorites, display the movie details in order.

```
const selectedMovieIds = [2,20,4,12]

```

9. write a function to add specific movie id to the given array
