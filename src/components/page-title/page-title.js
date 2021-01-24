import React from 'react';
import Typography from '@material-ui/core/Typography';
import './page-title.css';
import PropTypes from 'prop-types';

export default function PageTitle(props) {
  return (
    <Typography variant="h3" className="title" data-testid="title">
      {props.title}
    </Typography>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};