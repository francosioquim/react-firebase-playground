import * as uiActions from 'actions/uiActions'

import Header from './Header'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'cake-ui-v1/Typography'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from 'cake-ui-v1/styles'

const styles = () => ({
  root: {
    padding: 20,
  },
  list: {
    textAlign: 'left',
    fontSize: '1.2rem',
    '& > li': {
      margin: '10px 0',
      '& > a': {
        textDecoration: 'none',
      },
    },
  },
})

class Something extends React.Component {
  componentWillMount() {
    this.props.actions.updateHeaderTitle('Crab Cake')
  }

  render() {
    const { classes } = this.props

    return [
      <Header key="header" />,
      <div key="content" className={classes.root}>
        <Typography variant="title" align="center">
          Something Page
        </Typography>
      </div>,
    ]
  }
}

Something.displayName = 'Something'

Something.defaultProps = {
  actions: {},
}

Something.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = { ...uiActions }
  const actionMap = bindActionCreators(actions, dispatch)
  return {
    actions: actionMap,
  }
}

const styledSomething = withStyles(styles)(Something)
export default connect(mapStateToProps, mapDispatchToProps)(styledSomething)
