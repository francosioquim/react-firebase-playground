import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import {withStyles} from 'material-ui/styles'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class AppHeader extends React.Component {
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="contrast"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
              align="center">
              Crab Cake
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

AppHeader.displayName = 'AppHeader'

export default withStyles(styles)(AppHeader)
