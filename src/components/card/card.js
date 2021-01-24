import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import './card.css';

export default function CustomCard(props) {
  return (
    <Card className="card">
      <CardContent>
        <Grid container>
          <Grid item xs={11}>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          </Grid>
          {
            props.enableButton && 
            <Grid item xs={1}>
              <IconButton 
                aria-label="favorite"
                onClick={props.onClick}>
                <FavoriteIcon 
                  fontSize="default" 
                  color={props.isActive ? 'secondary' : 'inherit'} />
              </IconButton>
            </Grid>
          }
        </Grid>
        
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
        <Typography variant="body2" component="p">
          {
            props.links.map((l) => 
              <Link href={l} target="_blank" style={{marginRight: '10px'}} key={l}>{l}</Link>
            )
          }
        </Typography>
      </CardContent>
    </Card>
  );
}