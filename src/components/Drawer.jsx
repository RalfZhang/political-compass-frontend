import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import { menus, moreInfo } from './titleData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    // minHeight: '100vh',
    // marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    // position: 'relative',
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    // position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerDocked: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      // position: 'relative',
      height: '100%',
    },
  },
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;
    console.log('--------', classes, theme);

    const drawer = (
      <div>
        <div className={classes.drawerHeader} />
        <Divider />
        <List>{menus}</List>
        <Divider />
        <List>{moreInfo}</List>
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                Responsive drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden lgUp>
            <Drawer
              type="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden lgDown>
            <Drawer
              type="permanent"
              open
              classes={{
                docked: classes.drawerDocked,
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            2333
            <br />
            2333333333333333333333333333333333333333333333333333333333333333
            <br />
            2333
            <br />
            2333
            <br />
            2333
            <br />
            2333
            <br />
            2333
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
