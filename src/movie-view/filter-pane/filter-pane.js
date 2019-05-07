import React from 'react';
import Genres from '../filter-pane/partials/genre-filter';

const FilterPane = () => {
  //filter based on time
  // after 10AM
  // after 3PM
  // after 7PM

  //filter based on ratings
  //1,2,3,4,5
  return (
    <div>
      <div>Sort By Genres</div>
      <Genres />
      <div>Sort By Time</div>
      <div>Sort By Ratings</div>
    </div>
  );
};

export default FilterPane;
