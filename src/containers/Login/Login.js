import Logo from 'components/atoms/Logo'
import PropTypes from 'prop-types'
import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        textAlign: 'center',
    },
    logo: {
        marginBottom: theme.spacing.xl,
    },
})

const Login = ({ classes, uiConfig }) => (
    <div className={classes.root}>
        <Logo className={classes.logo} />
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
)

Login.propTypes = {
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    uiConfig: PropTypes.object,
    onLogin: PropTypes.func,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
}

export default withStyles(styles)(Login)
