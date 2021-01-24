import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function NavDrawer(props) {
  return (
    <Drawer anchor="left" open={props.showSidebar} onClose={props.toggleSidebar}>
      <div role="presentation"
        style={{ width: 250 }}>
        <List>
          <ListItem>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Unipat
            </Typography>
          </ListItem>
          <ListItem button component={Link} to={'universities'}>
            <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
            <ListItemText primary={'Universities'} />
          </ListItem>
          <ListItem button component={Link} to={'newsletters'}>
            <ListItemIcon><AllInboxIcon /></ListItemIcon>
            <ListItemText primary={'Newsletters'} />
          </ListItem>
          <ListItem button component={Link} to={'favorites'}>
            <ListItemIcon><FavoriteIcon /></ListItemIcon>
            <ListItemText primary={'Favorites'} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}