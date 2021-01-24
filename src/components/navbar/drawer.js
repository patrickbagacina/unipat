import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function NavDrawer(props) {
  const redirect = (route) => {
    const { history } = props;
    if (history.push) history.push(route);
    props.toggleSidebar();
  }

  return (
    <Drawer anchor="left" open={props.showSidebar} onClose={props.toggleSidebar}>
      <div role="presentation"
        style={{ width: 250 }}>
        <List>
          <ListItem>
            <Typography data-testid="d-title" variant="h6" style={{ flexGrow: 1 }}>
              UniApp
            </Typography>
          </ListItem>
          <ListItem data-testid="d-li-universities" button onClick={() => redirect('universities')}>
            <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
            <ListItemText primary={'Universities'} />
          </ListItem>
          <ListItem button onClick={() => redirect('newsletters')}>
            <ListItemIcon><AllInboxIcon /></ListItemIcon>
            <ListItemText primary={'Newsletters'} />
          </ListItem>
          <ListItem button onClick={() => redirect('favorites')}>
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText primary={'Favorites'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

NavDrawer.propTypes = {
  history: PropTypes.object.isRequired,
  showSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};