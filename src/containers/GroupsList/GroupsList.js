import Fab from '@material-ui/core/Fab'
import GroupsItemList from 'components/organisms/GroupsItemList'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core'

export const styles = (theme) => ({
    root: {},
    right: {
        display: 'block',
        textAlign: 'center',
        width: '100%',
    },
    fab: {
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.lg,
    },
})

function GroupsList(props) {
    const { classes, className: classNameProp, groups, handleItemClick } = props

    const className = classNames(classes.root, classNameProp)
    return (
        <div className={className}>
            <div className={classes.right}>
                <Fab size="medium" variant="extended" color="secondary" aria-label="Add" className={classes.fab}>
                    Start A New Group
                </Fab>
            </div>
            <GroupsItemList groups={groups || []} onItemClick={handleItemClick} />
        </div>
    )
}

GroupsList.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    groups: PropTypes.array,
    handleItemClick: PropTypes.func,
}

export default withStyles(styles)(GroupsList)
