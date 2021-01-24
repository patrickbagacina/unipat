import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TopicCard } from './card';
import PropTypes from 'prop-types';

export default function Topics(props) {
  const cards = props.topics.map((t) => 
    <Grid item xs={12} key={`${t.id}`}>
      <TopicCard topic={t} />
    </Grid>
  );
  return (
    <Grid container spacing={5}>
      {cards}
    </Grid>
  );
}

Topics.propTypes = {
  topics: PropTypes.array.isRequired,
};