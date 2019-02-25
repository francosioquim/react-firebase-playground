import GroupDetailsBox from 'components/organisms/GroupDetailsBox'
import PropTypes from 'prop-types'
import React from 'react'
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
    const { group, onGroupsClick, isGroupOwner } = props
    return group ? <GroupDetailsBox isGroupOwner={isGroupOwner} onGroupsClick={onGroupsClick} group={group} /> : <div />
}

GroupDetails.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    group: PropTypes.object,
    onGroupsClick: PropTypes.func,
    isGroupOwner: PropTypes.bool,
}

export default injectSheet(styles)(GroupDetails)
