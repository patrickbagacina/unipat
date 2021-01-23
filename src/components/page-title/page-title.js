import Typography from '@material-ui/core/Typography';
import './page-title.css';

export default function PageTitle(props) {
  return (
    <Typography variant="h3" className="title">
      {props.title}
    </Typography>
  );
}