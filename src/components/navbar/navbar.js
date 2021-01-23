import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Unipat</Typography>
      </Toolbar>
    </AppBar>
  );
}