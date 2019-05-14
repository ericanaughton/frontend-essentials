import React from 'react';
import { GENRES } from '../../../constants/genres';
import { connect } from 'react-redux';
import actions from '../actions';

const mapStateToProps = state => ({
  selectedGenres: state.filter.genre
});

const mapDispatchToProps = dispatch => ({
  onFilter: (name, field) => dispatch(actions.onFilter(name, field))
});

const GenreFilter = ({ onFilter, selectedGenres }) => {
  console.log(onFilter);

  return (
    <div>
      {Object.values(GENRES).map(genre => (
        <div key={genre}>
          <label htmlFor={genre}>
            <input
              type="checkbox"
              checked={selectedGenres.includes(genre)}
              value={genre}
              onChange={e => onFilter('genre', e.target.value)}
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
