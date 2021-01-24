import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from './drawer';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      logout: null,
      showSidebar: false
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
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

  toggleSidebar() {
    const { showSidebar } = this.state;

    this.setState({ showSidebar: !showSidebar });
  }

  render() {
    const { showSidebar } = this.state;
    if (this.state.logout) return <Redirect to={'/signin'} />
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <React.Fragment key="left">
              <IconButton
                onClick={this.toggleSidebar}
                edge="start" 
                style={{ marginRight: '15px' }} 
                color="inherit" 
                aria-label="menu">
                <MenuIcon />
              </IconButton>
              <NavDrawer showSidebar={showSidebar} toggleSidebar={this.toggleSidebar} />
            </React.Fragment>
            
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