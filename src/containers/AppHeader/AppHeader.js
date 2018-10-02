import Header from 'components/organisms/Header'
import PropTypes from 'prop-types'
import { ROUTES } from 'constants/routes'
import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'cake-ui-v1/styles'

export const styles = () => ({
    root: {},
})

const AppHeader = ({
    actions,
    classes,
    children: childrenProp,
    className: classNameProp,
    goTo,
    onLogout,
    pathname,
    ...other
}) => (
    <Header
        className={classNames(classes.root, classNameProp)}
        onChange={(route) => {
            goTo(route)
        }}
        pathname={pathname}
        tabItems={ROUTES}
        onLogout={onLogout}
        {...other}
    />
)

AppHeader.propTypes = {
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    goTo: PropTypes.func,
    onLogout: PropTypes.func,
    pathname: PropTypes.string,
}

export default withStyles(styles)(AppHeader)
