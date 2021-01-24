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
import Typography from '@material-ui/core/Typography';
import PageTitle from '../page-title/page-title';
import './signin.css';
import PropTypes from 'prop-types';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      password: null,
      username: null,
      errors: null,
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

    if (username === null || username.trim() === '') errors['username'] = 'Username is required';
    if (password === null || password.trim() === '') errors['password'] = 'Password is required';
    if (errors.username || errors.password) {
      this.setState({
        errors: errors
      });
      return;
    }

    if (this.authenticate(username, password)) {
      this.setState({
        errors: null
      });
      this.redirect('/');
    } else {
      this.setState({
        errors: {
          message: 'Invalid username / password'
        }
      });
    }
  }

  redirect(route) {
    const { history } = this.props;
    if (history.push) history.push(route);
  }

  render() {
    const { showPassword, errors } = this.state;
    const passHasError = errors != null && errors.password !== null;
    const usernameHasError = errors != null && errors.username !== null;
    return (
      <div className="f-container">
        <Grid container spacing={3}>
          <Grid item xs={12} className="center">
            <PageTitle title="UniApp" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined" 
              error={usernameHasError}
              helperText={usernameHasError ? errors.username : null}
              onChange={(e) => this.handleChange(e, 'username')}
              InputProps={{inputProps: {'data-testid': 'input-username'}}} />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                inputProps={{'data-testid': 'input-password'}}
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
              data-testid="btn-sign-in"
              onClick={this.handleSubmit}>
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button data-testid="btn-register" fullWidth onClick={() => this.redirect('register')} color="primary">
              Register
            </Button>
          </Grid>
          <Grid item xs={12} className="center">
            <Typography variant="body2" component="p">
              or
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button data-testid="btn-guest" fullWidth onClick={() => this.redirect('universities')} color="primary">
              Continue as Guest
            </Button>
          </Grid>
        </Grid>
      </div> 
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};