import React from 'react';
import ReactDOM from 'react-dom';
import AllMovies from '../react-redux-exercise/components/all-movies.js';

import './styles.css';

const myTable = [...Array(5).keys()]; //need to have 5 columns

function App() {
  return (
    <div className="App">
      <AllMovies />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
