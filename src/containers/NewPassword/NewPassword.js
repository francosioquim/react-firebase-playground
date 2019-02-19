import FormHeading from 'components/molecules/FormHeading'
import FormResult from 'components/organisms/FormResult'
import Logo from 'components/atoms/Logo'
import NewPasswordForm from 'components/organisms/NewPasswordForm'
import PropTypes from 'prop-types'
import React from 'react'
import SuccessIcon from 'components/atoms/SuccessIcon'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        textAlign: 'center',
    },
    logo: {
        marginBottom: theme.spacing.xl,
    },
})

const NewPassword = ({ classes, goToLogin, goToReset, onReset, hasError, resetSuccess, token }) => (
    <div className={classes.root}>
        <Logo className={classes.logo} />
        {!token.length || hasError ? (
            <div>
                <FormResult
                    onClick={goToReset}
                    heading="Something went wrong"
                    subHeading="Ooops... Your token is invalid or has expired"
                    buttonLabel="Resend Reset Link"
                />
            </div>
        ) : null}
        {token.length && resetSuccess ? (
            <div>
                <SuccessIcon />
                <FormResult
                    onClick={goToLogin}
                    heading="Password reset success"
                    subHeading="Your password has been successfully reset."
                    buttonLabel="Reset password"
                />
            </div>
        ) : null}
        {token.length && !resetSuccess && !hasError ? (
            <div>
                <FormHeading heading="New Password" />
                <NewPasswordForm onReset={onReset} />
            </div>
        ) : null}
    </div>
)

NewPassword.propTypes = {
    classes: PropTypes.object.isRequired,
    goToLogin: PropTypes.func,
    goToReset: PropTypes.func,
    onReset: PropTypes.func,
    hasError: PropTypes.bool,
    resetSuccess: PropTypes.bool,
    errorMessage: PropTypes.string,
    token: PropTypes.string,
}

export default withStyles(styles)(NewPassword)
