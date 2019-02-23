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
            <GroupsItemList groups={groups || []} onItemClick={handleItemClick} />
        </div>
    )
}

GroupsList.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    groups: PropTypes.array,
    handleItemClick: PropTypes.func,
    handleCreateGroup: PropTypes.func,
}

export default withStyles(styles)(GroupsList)
