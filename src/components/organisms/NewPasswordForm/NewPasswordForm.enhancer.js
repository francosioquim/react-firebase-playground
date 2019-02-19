import { FORM_ACTION_ERROR_STATUS, FORM_PROGRESS_STATUS, FORM_SUBMIT_STATUS } from 'constants/form'
import { compose, lifecycle, withHandlers } from 'recompose'
import { required, samePassword, withinMinLength } from 'utils/validation'

import { withFormik } from 'formik'

export default compose(
    withFormik({
        // Transform outer props into form values
        mapPropsToValues: () => ({ password: '', repeatPassword: '' }),
        // Add a custom validation function (this can be async too!)
        validate: ({ password, repeatPassword }) => {
            const errors = {}
            if (required(password)) {
                errors.password = 'Please enter your new password'
            } else if (!withinMinLength(6, password)) {
                errors.password = 'Your password should be at least 6 characters'
            }

            if (required(repeatPassword)) {
                errors.repeatPassword = 'Please re-enter your new password'
            } else if (!samePassword(password, repeatPassword)) {
                errors.repeatPassword = "Ooops... Password doesn't match"
            }
            return errors
        },
        enableReinitialize: true,
        validateOnChange: false,
        handleSubmit: (values, { props, setSubmitting }) => {
            setSubmitting(true)
            // If form has no error
            if (props.onReset) {
                props.onReset(values.password)
            }
        },
    }),
    // Handlers
    withHandlers({
        handleFieldChange: (props) => (event) => {
            // test
            props.setStatus(FORM_PROGRESS_STATUS)
            props.handleChange(event)
        },
        handleFormSubmit: (props) => (event) => {
            props.setStatus(FORM_SUBMIT_STATUS)
            props.handleSubmit(event)
        },
        hasFieldError: (props) => (fieldName) => {
            return !!(props.errors[fieldName] && props.errors[fieldName].length && props.status === FORM_SUBMIT_STATUS)
        },
    }),
    lifecycle({
        componentDidUpdate(prevProps) {
            const { apiCallError, setStatus, setSubmitting } = this.props
            // trigger when error occured during login
            if (prevProps.apiCallError !== apiCallError && apiCallError) {
                setStatus(FORM_ACTION_ERROR_STATUS)
                setSubmitting(false)
            }
        },
    })
)
