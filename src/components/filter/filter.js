import React from 'react';
import SearchableDropdown from '../searchable-dropdown/searchable-dropdown';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: null,
      text: null
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleDropdownChange(event) {
    const value = event.target.innerText ? event.target.innerText : null;
    this.setState({dropdown: value});
  }

  handleTextChange(event) {
    const value = event.target.value ? event.target.value : null;
    this.setState({text: value});
  }

  render() {
    const { dropdown, text, button, onFilter } = this.props;
    return (
      <div>
        <SearchableDropdown 
          label={dropdown.label} 
          options={dropdown.options} 
          onChange={this.handleDropdownChange} />
        <TextField 
          label={text.label} 
          variant="outlined" 
          onChange={this.handleTextChange} />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => onFilter({dropdown: this.state.dropdown, text: this.state.text}) }>
          {button.label}
        </Button>
      </div>
    );
  }
}