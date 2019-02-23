import Button from '@material-ui/core/Button'
import { FORM_ACTION_ERROR_STATUS } from 'constants/form'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
    root: {
        textAlign: 'center',
        padding: `0 ${theme.spacing.unit}px`,
    },
    errorMessage: {
        padding: `${theme.spacing.md}px 0`,
    },
    formControl: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
})

const CreateGroupForm = ({
    classes,
    className: classNameProp,
    errorMessage,
    errors,
    handleFieldChange,
    hasFieldError,
    isSubmitting,
    handleFormSubmit,
    status,
    values,
}) => {
    const className = classNames(classes.root, classNameProp)
    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ]
    return (
        <div className={className}>
            {status === FORM_ACTION_ERROR_STATUS && errorMessage ? (
                <Typography className={classes.errorMessage} color="error" align="center">
                    {errorMessage}
                </Typography>
            ) : null}
            <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                <FormControl className={classes.formControl} fullWidth error={hasFieldError('name')}>
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        value={values.name}
                        onChange={handleFieldChange}
                        margin="normal"
                        error={hasFieldError('name')}
                        inputProps={{
                            maxLength: 256,
                        }}
                    />
                    {hasFieldError('name') ? <FormHelperText>{errors.name}</FormHelperText> : null}
                </FormControl>
                <FormControl className={classes.formControl} fullWidth error={hasFieldError('location')}>
                    <TextField
                        id="location"
                        name="location"
                        label="Location"
                        select
                        value={values.location}
                        className={classes.textField}
                        onChange={handleFieldChange}
                        error={hasFieldError('location')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    {hasFieldError('location') ? <FormHelperText>{errors.location}</FormHelperText> : null}
                </FormControl>
                <FormControl className={classes.formControl} fullWidth error={hasFieldError('description')}>
                    <TextField
                        id="description"
                        name="description"
                        label="Tell us about your group"
                        multiline
                        rowsMax="10"
                        value={values.description}
                        onChange={handleFieldChange}
                        margin="normal"
                        error={hasFieldError('description')}
                        inputProps={{
                            maxLength: 480,
                        }}
                    />
                    {hasFieldError('description') ? <FormHelperText>{errors.description}</FormHelperText> : null}
                </FormControl>
                <FormControl className={classes.formControl} fullWidth>
                    <Button
                        autoFocus
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        size="large"
                        color="primary"
                    >
                        Create Group
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}

CreateGroupForm.propTypes = {
    apiCallError: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    errorMessage: PropTypes.string,
    errors: PropTypes.object,
    handleCheckboxChange: PropTypes.func,
    handleFieldChange: PropTypes.func,
    hasFieldError: PropTypes.func,
    handleFormSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
    rememberMe: PropTypes.bool,
    onCreate: PropTypes.func,
    status: PropTypes.string,
    values: PropTypes.object,
}

CreateGroupForm.defaultProps = {}

export default withStyles(styles)(CreateGroupForm)
