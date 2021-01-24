import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types';
import './card.css';

export default function CustomCard(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  let { title, enableButton, onClick, isActive, description, links } = props;
  return (
    <Card className="card">
      <CardContent>
        <Grid container>
          <Grid item xs={ isMobile ? 10 : 11}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          </Grid>
          {
            enableButton && 
            <Grid item xs={isMobile ? 2 : 1}>
              <IconButton 
                aria-label="favorite"
                data-testid="btn-favorite"
                onClick={onClick}>
                <FavoriteIcon 
                  fontSize="default" 
                  color={isActive ? 'secondary' : 'inherit'} />
              </IconButton>
            </Grid>
          }
        </Grid>
        
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography variant="body2" component="p">
          {
            links.map((l) => 
              <Link href={l} target="_blank" style={{marginRight: '10px'}} key={l}>{l}</Link>
            )
          }
        </Typography>
      </CardContent>
    </Card>
  );
}

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  enableButton: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};