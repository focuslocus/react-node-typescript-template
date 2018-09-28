import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import withRoot from '../WithRoot';

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  spinner: {
    marginTop: 50
  }
});

class AppShellBase extends React.Component<WithStyles<typeof styles>, {}> {

  showNotification(): void {
    if (Notification.permission == 'granted') {
      navigator.serviceWorker.getRegistration().then(reg => {
        reg.showNotification('You\'ve been notified', { body: 'of this message' });
      });
    }
  }

  render(): React.ReactNode {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' className={classes.grow}>
              PWA App Shell
            </Typography>
            <Button onClick={(event: React.MouseEvent<HTMLElement>) => this.showNotification()} color='inherit'>Notify</Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify={'center'}>
              <CircularProgress className={classes.spinner} />
            </Grid>
          </Grid>
        </Grid>
      </div>

    );
  }
};

export const AppShellComponent = withRoot(withStyles(styles, { withTheme: true })(AppShellBase));
