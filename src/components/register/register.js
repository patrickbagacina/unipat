import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Alert from '@material-ui/lab/Alert';
import PageTitle from '../page-title/page-title';
import { Link } from 'react-router-dom';

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      password: null,
      username: null,
      errors: null,
      message: null
    };

    this.togglePassword = this.togglePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, field) {
    const nextState = {};
    nextState[field] = event.target.value;
    this.setState(nextState);
  }

  togglePassword() {
    const visible = this.state.showPassword;

    this.setState({
      showPassword: !visible
    });
  }

  isAvailable(username) {
    const u = localStorage.getItem('users');
    if (!u) return true;

    const users = JSON.parse(u);
    const user = users.find((u) => u.username === username);

    if (user) return false;

    return true;
  }

  saveToStorage(username, password) {
    const u = localStorage.getItem('users');
    let users = [];
    if (u) users = JSON.parse(u);

    // push new user to users
    users.push({username: username, password: password});

    // write users to storage
    localStorage.setItem('users', JSON.stringify(users));
  }

  handleSubmit() {
    const { username, password } = this.state;
    const errors = {};

    if (username === null || username.trim() === '') errors['username'] = 'Required';
    if (password === null || password.trim() === '') errors['password'] = 'Required';
    if (errors.username || errors.password) {
      this.setState({
        errors: errors
      });
      return;
    }

    if (this.isAvailable(username)) {
      this.saveToStorage(username, password);
      this.setState({
        errors: null,
        message: 'Successfully registered user! Please sign in to continue.'
      });
    } else {
      this.setState({
        errors: {
          username: 'Username is already taken'
        }
      });
    }
  }

  render() {
    const { showPassword, errors, message } = this.state;
    const passHasError = errors != null && errors.password !== null;
    const usernameHasError = errors != null && errors.username !== null;
    return (
      <div className="f-container">
        <Grid container spacing={3}>
          <Grid item xs={12} className="center">
            <PageTitle title="UniApp" />
          </Grid>
          {
            message && 
            <Grid item xs={12}>
              <Alert severity="success">{message}</Alert>
            </Grid>
          }
          <Grid item xs={12}>
            <TextField 
              fullWidth
              label="Username"
              variant="outlined" 
              error={usernameHasError}
              helperText={usernameHasError ? errors.username : null}
              onChange={(e) => this.handleChange(e, 'username')} />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => this.handleChange(e, 'password')}
                error={passHasError}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={this.togglePassword}
                      onMouseDown={this.togglePassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
              {passHasError && <FormHelperText error id="component-error-text">{errors.password}</FormHelperText>}
              {errors && errors.message && <FormHelperText error id="component-error-text">{errors.message}</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button 
              fullWidth
              variant="contained" 
              color="primary" 
              onClick={this.handleSubmit}>
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
          <Button fullWidth component={Link} to={`signin`} color="primary">
            Sign In
          </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}