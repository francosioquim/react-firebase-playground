import AppHeader from 'components/AppHeader'
import PropTypes from 'prop-types'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
