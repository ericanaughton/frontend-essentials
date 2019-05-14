import React, { Fragment } from 'react';
import { Details } from './movie-view';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  pages: state
});

const App = ({ pages }) =>
  console.log('pages', pages) || (
    <Fragment>
      <Details />
    </Fragment>
  );

export default connect(mapStateToProps)(App);
