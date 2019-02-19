import FormHeading from 'components/molecules/FormHeading'
import FormResult from 'components/organisms/FormResult'
import Logo from 'components/atoms/Logo'
import PropTypes from 'prop-types'
import React from 'react'
import ResetForm from 'components/organisms/ResetForm'
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

const Reset = ({ classes, errorMessage, goToLogin, onReset, hasError, resetSuccess }) => (
    <div className={classes.root}>
        <Logo className={classes.logo} />
        {resetSuccess ? (
            <div>
                <SuccessIcon />
                <FormResult
                    onClick={goToLogin}
                    buttonLabel="Return to login"
                    heading="Password reset requested"
                    subHeading="A link to reset your password has been sent to your email address."
                />
            </div>
        ) : (
            <div>
                <FormHeading heading="Reset Password" subHeading="Reset your password using your email" />
                <ResetForm onReset={onReset} apiCallError={hasError} errorMessage={errorMessage} />
            </div>
        )}
    </div>
)

Reset.propTypes = {
    classes: PropTypes.object.isRequired,
    goToLogin: PropTypes.func,
    onReset: PropTypes.func,
    hasError: PropTypes.bool,
    resetSuccess: PropTypes.bool,
    errorMessage: PropTypes.string,
}

export default withStyles(styles)(Reset)
