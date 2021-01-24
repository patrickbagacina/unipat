import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from './drawer';
import PropTypes from 'prop-types';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
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
    this.redirect('signin');

    this.setState({
      user: null,
    });
  }

  toggleSidebar() {
    const { showSidebar } = this.state;

    this.setState({ showSidebar: !showSidebar });
  }

  redirect(route) {
    const { history } = this.props;
    if (history.push) history.push(route);
  }

  render() {
    const { showSidebar } = this.state;
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
              <NavDrawer history={this.props.history} showSidebar={showSidebar} toggleSidebar={this.toggleSidebar} />
            </React.Fragment>
            
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              UniApp
            </Typography>
            {
              this.state.user ?
                <Button color="inherit" data-testid="btn-logout" onClick={this.handleLogout}>
                  Logout
                </Button> :
                <Button color="inherit" data-testid="btn-login" onClick={() => this.redirect('signin')}>
                  Login
                </Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  history: PropTypes.object.isRequired,
};