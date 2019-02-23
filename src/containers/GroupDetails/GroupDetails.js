import { Avatar, Grid, Typography } from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

export const styles = (theme) => ({
    root: {},
    avatar: {
        marginBottom: theme.spacing.md,
        width: 80,
        height: 80,
    },
    left: {
        textAlign: 'left',
    },
    center: {
        textAlign: 'center',
    },
})

function GroupDetails(props) {
    const { classes, className: classNameProp, groupImage, groupName, groupDescription, onGroupsClick, slug } = props

    const className = classNames(classes.root, classNameProp)
    return (
        <Grid container justify="center" className={className}>
            <Grid item xs={12} className={classes.left}>
                <Button size="small" className={classes.margin} onClick={onGroupsClick}>
                    <LeftIcon />
                    Groups
                </Button>
            </Grid>
            <Avatar className={classes.avatar} src={groupImage} />
            <Grid item xs={12}>
                <Typography variant="h6" align="center" gutterBottom>
                    {groupName} {slug}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" align="center" gutterBottom>
                    {groupDescription}
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.center}>
                <Fab size="small" variant="extended" color="primary" aria-label="Add">
                    <AddIcon />
                    Join Group
                </Fab>
            </Grid>
        </Grid>
    )
}

GroupDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    groupName: PropTypes.string,
    groupDescription: PropTypes.string,
    groupImage: PropTypes.string,
    onGroupsClick: PropTypes.func,
    slug: PropTypes.string,
}

export default injectSheet(styles)(GroupDetails)
