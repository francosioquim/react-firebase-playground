import { FORM_ACTION_ERROR_STATUS, FORM_PROGRESS_STATUS, FORM_SUBMIT_STATUS } from 'constants/form'
import { compose, lifecycle, withHandlers, withStateHandlers } from 'recompose'

import { required } from 'utils/validation'
import { withFormik } from 'formik'

export default compose(
    withFormik({
        // Transform outer props into form values
        mapPropsToValues: () => ({ name: '', description: '', location: '' }),
        // Add a custom validation function (this can be async too!)
        validate: ({ name, description, location }) => {
            const errors = {}
            if (required(name)) {
                errors.name = 'Please enter your group name'
            }
            if (required(description)) {
                errors.description = 'Please enter a description about this group'
            }
            if (required(location)) {
                errors.location = 'Please enter the location'
            }
            return errors
        },
        enableReinitialize: true,
        validateOnChange: false,
        handleSubmit: (values, { props, setSubmitting }) => {
            setSubmitting(true)
            // If form has no error
            if (props.onCreate) {
                props.onCreate(values)
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
        handleLocationChange: (props) => (event) => {
            props.setFieldValue('location', event.target.checked)
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
