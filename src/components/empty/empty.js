import React from 'react';
import Grid from '@material-ui/core/Grid';
import './empty.css';
import PropTypes from 'prop-types';

export default function Empty(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} className="container">
          <label className="message">
            {props.message}
          </label>
        </Grid>
      </Grid>
    </div>
  );
}

Empty.propTypes = {
  message: PropTypes.string.isRequired,
};