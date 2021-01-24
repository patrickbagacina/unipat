import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';

export default function SearchableDropdown(props) {
  return (
    <Autocomplete
      data-testid="s-dropdown"
      options={props.options}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField 
        {...params} 
        label={props.label} 
        variant="outlined" />}
      onChange={props.onChange}
    />
  );
}

SearchableDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};