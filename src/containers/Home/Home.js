import GroupDetailsBox from 'components/organisms/GroupDetailsBox'
import ProgressLoader from 'components/atoms/ProgressLoader'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

export const styles = () => ({
    root: {},
})

function Home(props) {
    const { classes, className: classNameProp, getGroupsProgress, isGroupOwner, onGroupsClick, group } = props

    const className = classNames(classes.root, classNameProp)

    return (
        <div className={className}>
            {getGroupsProgress.inProgress ? (
                <ProgressLoader />
            ) : (
                <GroupDetailsBox isGroupOwner={isGroupOwner} onGroupsClick={onGroupsClick} group={group} />
            )}
        </div>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    group: PropTypes.object,
    onGroupsClick: PropTypes.func,
    getGroupsProgress: PropTypes.object,
    isGroupOwner: PropTypes.bool,
}

export default injectSheet(styles)(Home)
