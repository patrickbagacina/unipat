import Grid from '@material-ui/core/Grid';
import './empty.css';

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