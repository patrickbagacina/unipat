import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Topics from './topics';
import './view.css';
import PropTypes from 'prop-types';

export default function ViewLetter(props) {
  const { letter } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button 
          color="primary" 
          onClick={props.onBack}>
          Go Back
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Card className="card">
          <CardMedia image={letter.content.bannerImg} height="400" component="img" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} className="center">
                <Typography variant="h4" component="h2">
                  SCHOOL NEWS
                </Typography>
              </Grid>
              <Grid item xs={12} className="center">
                <Typography variant="body1" component="p">
                  { letter.school.name } • {letter.school.country}
                </Typography>
              </Grid>
              <Grid item xs={12} className="center">
                <Typography variant="body1" component="p">
                  { letter.date }
                </Typography>
              </Grid>
              <Grid item xs={12} className="center">
                <Topics topics={letter.content.topics} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

ViewLetter.propTypes = {
  letter: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};