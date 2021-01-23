import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SearchableDropdown(props) {
  return (
    <Autocomplete
      options={props.options}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={props.label} variant="outlined" />}
      onChange={props.onChange}
    />
  );
}