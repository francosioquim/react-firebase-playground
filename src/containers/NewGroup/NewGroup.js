import CreateGroupForm from '../../components/organisms/CreateGroupForm'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

export const styles = () => ({
    root: {
        textAlign: 'center',
    },
})

function NewGroup(props) {
    const { classes, className: classNameProp, handleCreateGroup } = props
    const className = classNames(classes.root, classNameProp)

    return (
        <div className={className}>
            <CreateGroupForm onCreate={handleCreateGroup} />
        </div>
    )
}

NewGroup.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    handleCreateGroup: PropTypes.func,
}

export default injectSheet(styles)(NewGroup)
