import Typography from '@material-ui/core/Typography';

export default function Empty(props) {
  return (
    <div>
      <Typography variant="body2" component="p">
        {props.message}
      </Typography>
    </div>
  );
}