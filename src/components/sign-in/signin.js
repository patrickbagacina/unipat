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
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      password: null,
      username: null,
      errors: null,
      success: null
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

  authenticate(username, password) {
    const u = localStorage.getItem('users');
    let users = [];
    if (u) users = JSON.parse(u);

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) localStorage.setItem('currentUser', JSON.stringify(user));

    return user;
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

    if (this.authenticate(username, password)) {
      this.setState({
        errors: null,
        success: true
      });
    } else {
      this.setState({
        errors: {
          message: 'Invalid username / password'
        }
      });
    }
  }

  render() {
    const { showPassword, errors, success } = this.state;
    const passHasError = errors != null && errors.password !== null;
    const usernameHasError = errors != null && errors.username !== null;
    if (success) return <Redirect to={'/'} />
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Sign In</h1>
        </Grid>
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
            Sign In
          </Button>
        </Grid>
        <Grid item xs={12}>
        <Button fullWidth component={Link} to={`register`} color="primary">
          Register
        </Button>
        </Grid>
      </Grid>
    );
  }
}