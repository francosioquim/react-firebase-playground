import LoginForm from 'components/organisms/LoginForm'
import Logo from 'components/atoms/Logo'
import PropTypes from 'prop-types'
import React from 'react'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        textAlign: 'center',
    },
    logo: {
        marginBottom: theme.spacing.xl,
    },
})

const Login = ({ classes, errorMessage, onLogin, hasError }) => (
    <div className={classes.root}>
        <Logo className={classes.logo} />
        <LoginForm onLogin={onLogin} apiCallError={hasError} errorMessage={errorMessage} />
    </div>
)

Login.propTypes = {
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    onLogin: PropTypes.func,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
}

export default withStyles(styles)(Login)
