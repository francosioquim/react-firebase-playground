import * as uiActions from '../actions/uiActions'

import Header from './Header'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withStyles} from 'material-ui/styles'

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

class Landing extends React.Component {
  componentWillMount() {
    this.props.actions.updateHeaderTitle('Crab Cake')
  }

  render() {
    const {classes} = this.props

    return [
      <Header key="header" />,
      <div key="content" className={classes.root}>
        <Typography variant="title" align="center">
          A ReactJS Seed Project
        </Typography>
        <div>
          <Typography variant="headline" align="left">
            {"What's inside?"}
          </Typography>
          <div>
            <ul className={classes.list}>
              <li>
                <a href="https://github.com/timarney/react-app-rewired">
                  React App Rewired
                </a>: Tweak the create-react-app webpack config(s) without using{' '}
                {"'eject'"} and without creating a fork of the react-scripts
              </li>
              <li>
                <a href="https://github.com/mui-org/material-ui">
                  Material-UI v1
                </a>
              </li>
              <li>
                <a href="https://github.com/facebook/react">React 16</a>
              </li>
              <li>
                <a href="https://github.com/reactjs/redux">Redux</a>
              </li>
              <li>
                <a href="https://github.com/ReactTraining/react-router">
                  React Router
                </a>
              </li>
              <li>
                <a href="https://github.com/webpack/webpack">Webpack 3</a>
              </li>
              <li>
                <a href="https://github.com/marcelmokos/eslint-config-with-prettier">
                  Prettier
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>,
    ]
  }
}

Landing.displayName = 'Landing'

Landing.defaultProps = {
  actions: {},
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {...uiActions}
  const actionMap = bindActionCreators(actions, dispatch)
  return {
    actions: actionMap,
  }
}

const styledLanding = withStyles(styles)(Landing)
export default connect(mapStateToProps, mapDispatchToProps)(styledLanding)
