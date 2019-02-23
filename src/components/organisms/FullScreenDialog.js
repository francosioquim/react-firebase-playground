import AppBar from '@material-ui/core/AppBar'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import { Grid } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import React from 'react'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => {
    return {
        appBar: {
            position: 'relative',
        },
        content: {
            maxWidth: 1280,
            minHeight: '100vh',
            margin: '0 auto',
        },
        wrapper: {
            backgroundColor: theme.palette.background.default,
            paddingTop: theme.spacing.lg,
            paddingBottom: theme.spacing.lg,
            paddingLeft: theme.spacing.md,
            paddingRight: theme.spacing.md,
            width: '100%',
            maxWidth: 440,
        },
    }
}

const Transition = (props) => {
    return <Slide direction="up" {...props} />
}

const FullScreenDialog = (props) => {
    const { children, classes, open, onClose, title } = props
    return (
        <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton color="inherit" onClick={onClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    {title && (
                        <Typography variant="h4" color="inherit" className={classes.flex}>
                            {title}
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>
            <Grid container className={classes.content} justify="center" alignItems="center">
                <Grid className={classes.wrapper}>{children}</Grid>
            </Grid>
        </Dialog>
    )
}
FullScreenDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    open: PropTypes.bool,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
}

FullScreenDialog.defaultProps = {}

export default withStyles(styles)(FullScreenDialog)
