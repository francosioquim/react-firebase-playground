import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppHeader from '../components/AppHeader'

class Header extends React.Component {
  render() {
    const { showLogin, title } = this.props

    return <AppHeader showLogin={showLogin} title={title} />
  }
}

Header.defaultProps = {
  title: 'Untitled Header',
  showLogin: false,
}

Header.propTypes = {
  title: PropTypes.string,
  showLogin: PropTypes.bool,
}

function mapStateToProps(state) {
  return {
    title: state.ui.headerTitle,
    showLogin: state.ui.headerShowLogin,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = bindActionCreators(actions, dispatch)
  return {
    actions: actionMap,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
