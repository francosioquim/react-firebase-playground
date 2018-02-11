import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import MenuIcon from 'material-ui-icons/Menu'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: '100%',
  },
  title: {
    flex: 1,
    color: theme.palette.getContrastText(theme.palette.primary[500]),
    fontSize: '1.4rem',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class AppHeader extends React.Component {
  render() {
    const { classes, showLogin, title } = this.props

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="secondary"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" align="center" className={classes.title}>
              {title || ''}
            </Typography>
            {showLogin && <Button color="secondary">Login</Button>}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

AppHeader.defaultProps = {
  title: '',
  showLogin: true,
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  showLogin: PropTypes.bool,
}

AppHeader.displayName = 'AppHeader'

export default withStyles(styles)(AppHeader)
