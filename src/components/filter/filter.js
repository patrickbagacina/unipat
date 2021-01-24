import React from 'react';
import SearchableDropdown from '../searchable-dropdown/searchable-dropdown';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MediaQuery from 'react-responsive';

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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MediaQuery maxDeviceWidth={600}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <SearchableDropdown 
                    label={dropdown.label} 
                    options={dropdown.options} 
                    onChange={this.handleDropdownChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    fullWidth
                    label={text.label} 
                    variant="outlined" 
                    onChange={this.handleTextChange} />
                </Grid>
              </Grid>
            </MediaQuery>
            <MediaQuery minDeviceWidth={601}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <SearchableDropdown 
                    label={dropdown.label} 
                    options={dropdown.options} 
                    onChange={this.handleDropdownChange} />
                </Grid>
                <Grid item xs={6}>
                  <TextField 
                    fullWidth
                    label={text.label} 
                    variant="outlined" 
                    onChange={this.handleTextChange} />
                </Grid>
              </Grid>
            </MediaQuery>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => onFilter({dropdown: this.state.dropdown, text: this.state.text}) }>
              {button.label}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}