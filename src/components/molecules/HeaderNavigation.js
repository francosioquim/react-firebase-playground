import PropTypes from 'prop-types'
import React from 'react'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    colorDefault: {},
    tabsRoot: {
        minWidth: 72,
        marginRight: theme.spacing.unit * 4,
    },
})

class HeaderNavigation extends React.Component {
    handleChange = (event, value) => {
        this.props.onChange(value)
    }

    render() {
        const {
            classes,
            className: classNameProp,
            component: Component,
            tabItems,
            onChange,
            pathname,
            ...other
        } = this.props
        const className = classNames(classes.root, classNameProp)

        const rootPath = pathname.split('/')[1]

        return (
            <Component className={className} {...other}>
                <Tabs
                    value={rootPath || 'projects'}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    classes={{ root: classes.tabsRoot }}
                >
                    {tabItems.map((tab) => {
                        return <Tab disableRipple key={tab.value} value={tab.value} label={tab.label} />
                    })}
                </Tabs>
            </Component>
        )
    }
}

HeaderNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    onChange: PropTypes.func.isRequired,
    pathname: PropTypes.string,
    tabItems: PropTypes.arrayOf(PropTypes.object),
}

HeaderNavigation.defaultProps = {
    component: 'div',
    pathname: 'projects',
}

export default withStyles(styles)(HeaderNavigation)
