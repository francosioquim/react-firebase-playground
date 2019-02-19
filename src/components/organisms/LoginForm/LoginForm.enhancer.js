import { FORM_ACTION_ERROR_STATUS, FORM_PROGRESS_STATUS, FORM_SUBMIT_STATUS } from 'constants/form'
import { compose, lifecycle, withHandlers, withStateHandlers } from 'recompose'
import { required, validEmail } from 'utils/validation'

import { withFormik } from 'formik'

export default compose(
    withFormik({
        // Transform outer props into form values
        mapPropsToValues: () => ({ email: '', password: '', rememberMe: false }),
        // Add a custom validation function (this can be async too!)
        validate: ({ email, password }) => {
            const errors = {}
            if (required(email)) {
                errors.email = 'Please enter your email address'
            } else if (!validEmail(email)) {
                errors.email = 'Please enter a valid email address'
            }
            if (required(password)) {
                errors.password = 'Please enter your password'
            }
            return errors
        },
        enableReinitialize: true,
        validateOnChange: false,
        handleSubmit: (values, { props, setSubmitting }) => {
            setSubmitting(true)
            // If form has no error
            if (props.onLogin) {
                props.onLogin(values)
            }
            // props.actions.loginUser(values)
        },
    }),
    withStateHandlers(
        ({ initialRememberMe = false }) => ({
            rememberMe: initialRememberMe,
        }),
        {
            toggleCheckbox: () => (event) => ({
                rememberMe: event.target.checked,
            }),
        }
    ),
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
        handleCheckboxChange: (props) => (event) => {
            props.setFieldValue('rememberMe', event.target.checked)
            props.toggleCheckbox(event)
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
