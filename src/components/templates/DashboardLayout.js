import AppHeader from 'containers/AppHeader'
import Copyright from 'components/atoms/Copyright'
import PageContent from 'cake-ui-v1/PageContent'
import PageFooter from 'cake-ui-v1/PageFooter'
import PageHeader from 'cake-ui-v1/PageHeader'
import PageWrapper from 'cake-ui-v1/PageWrapper'
import PropTypes from 'prop-types'
import React from 'react'
import { Route } from 'react-router'
import classNames from 'classnames'
import { withStyles } from 'cake-ui-v1/styles'

export const styles = (theme) => ({
    root: {},
    header: {
        backgroundColor: theme.palette.background.light,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.md,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },
    content: {
        backgroundColor: theme.palette.background.default,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.lg,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    footer: {
        backgroundColor: theme.palette.background,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },
})

const DashboardLayout = ({ classes, component: Component, className: classNameProp, ...rest }) => {
    const className = classNames(classes.root, classNameProp)
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <PageWrapper maxWidth={1280} className={className}>
                    <PageHeader className={classes.header}>
                        <AppHeader />
                    </PageHeader>
                    <PageContent className={classes.content}>
                        <Component {...matchProps} />
                    </PageContent>
                    <PageFooter className={classes.footer}>
                        <Copyright />
                    </PageFooter>
                </PageWrapper>
            )}
        />
    )
}

DashboardLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    component: PropTypes.func,
    className: PropTypes.string,
}

export default withStyles(styles)(DashboardLayout)
