import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      logout: null
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const cu = localStorage.getItem('currentUser');

    if (cu) {
      const currentUser = JSON.parse(cu);
      this.setState({
        user: currentUser
      });
    }
  }

  handleLogout() {
    localStorage.removeItem('currentUser');

    this.setState({
      user: null,
      logout: true,
    });
  }

  render() {
    if (this.state.logout) return <Redirect to={'/signin'} />
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Unipat
            </Typography>
            {
              this.state.user ?
                <Button color="inherit" onClick={this.handleLogout}>
                  Logout
                </Button> :
                <Button color="inherit" component={Link} to={`signin`}>
                  Login
                </Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}