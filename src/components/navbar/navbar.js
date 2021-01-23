import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Unipat
            </Typography>
            <Button color="inherit" component={Link} to={`signin`}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}