import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import './loading.css';
import PropTypes from 'prop-types';

export default function Loading(props) {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} className="container">
          <CircularProgress />
        </Grid>
        <Grid item xs={12} className="container">
          <label data-testid="label">{props.label}</label>
        </Grid>
      </Grid>
    </div>
  );
}

Loading.propTypes = {
  label: PropTypes.string.isRequired,
};