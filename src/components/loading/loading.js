import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading(props) {
  return (
    <div>
      <CircularProgress />
      <label>{props.label}</label>
    </div>
  );
}