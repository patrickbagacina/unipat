import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './card.css';

export default function NewsletterCard(props) {
  return (
    <Card className="card">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {props.name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="p">
              {props.country} • {props.date}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button 
              size="small"
              color="primary" 
              onClick={props.onClick}>
              Read
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export function TopicCard(props) {
  return (
    <Grid container spacing={2} className="gray">
      <Grid item xs={12}>
        <Typography variant="h5" component="h2">
          {props.topic.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p">
          by {props.topic.author}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="p">
          {props.topic.body}
        </Typography>
      </Grid>
    </Grid>
  );
}