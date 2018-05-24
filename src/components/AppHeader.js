import React from 'react'
import PropTypes from 'prop-types'

import AppBar from 'cake-ui-v1/AppBar'
import Button from 'cake-ui-v1/Button'
import Toolbar from 'cake-ui-v1/Toolbar'
import MenuIcon from 'cake-ui-v1-icons/Menu'
import IconButton from 'cake-ui-v1/IconButton'
import Typography from 'cake-ui-v1/Typography'
import { withStyles } from 'cake-ui-v1/styles'

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
