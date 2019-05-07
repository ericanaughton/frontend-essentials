import React from 'react';
import { GENRES } from '../../../constants/genres';
import { connect } from 'react-redux';
import actions from '../actions';

const mapStateToProps = state => ({
  // selectedGenres: state.filterPane.genres
});

const mapDispatchToProps = dispatch => ({
  onFilter: (name, field) => dispatch(actions.FILTER_BY({ name, field }))
});

const GenreFilter = ({ onFilter, selectedGenres }) => {
  return (
    <div>
      {Object.values(GENRES).map(genre => (
        <div key={genre}>
          <label htmlFor={genre}>
            <input
              type="checkbox"
              // checked={selectedGenres.includes(genre)}
              value={genre}
              onChange={() => onFilter('genres', genre)}
            />
            {genre}
          </label>
        </div>
      ))}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreFilter);
