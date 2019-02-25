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

function GroupDetailsBox(props) {
    const { classes, className: classNameProp, isGroupOwner, group, onGroupsClick } = props

    const className = classNames(classes.root, classNameProp)

    if (!group) {
        return null
    }

    return (
        <Grid container justify="center" className={className}>
            {onGroupsClick && (
                <Grid item xs={12} className={classes.left}>
                    <Button size="small" className={classes.margin} onClick={onGroupsClick}>
                        <LeftIcon />
                        Groups
                    </Button>
                </Grid>
            )}
            <Avatar className={classes.avatar} src={group.imageUrl} />
            <Grid item xs={12}>
                <Typography variant="h6" align="center" gutterBottom>
                    {group.name}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1" align="center" gutterBottom>
                    {group.description}
                </Typography>
            </Grid>
            {!isGroupOwner && (
                <Grid item xs={12} className={classes.center}>
                    <Fab size="small" variant="extended" color="primary" aria-label="Add">
                        <AddIcon />
                        Join Group
                    </Fab>
                </Grid>
            )}
        </Grid>
    )
}

GroupDetailsBox.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    group: PropTypes.object,
    isGroupOwner: PropTypes.bool,
    isGroupMember: PropTypes.bool,
    onGroupsClick: PropTypes.func,
}

export default injectSheet(styles)(GroupDetailsBox)
