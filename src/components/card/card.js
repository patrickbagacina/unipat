import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './card.css';

export default function CustomCard(props) {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.country}
        </Typography>
      </CardContent>
    </Card>
  );
}