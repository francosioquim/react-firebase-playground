import Avatar from 'cake-ui-v1/Avatar'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'cake-ui-v1/styles'

export const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        cursor: 'pointer',
    },
    avatar: {
        marginRight: theme.spacing.sm,
        backgroundColor: theme.palette.primary.main,
        fontSize: theme.typography.pxToRem(16),
    },
    user: {
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.sm,
    },
})
function UserAvatar(props) {
    const { children, classes, className: classNameProp, imgSrc, forwardedRef, user, ...other } = props

    const className = classNames(classes.root, classNameProp)

    const getUserInitials = (name) => {
        if (!name || typeof name !== 'string') {
            return ''
        }

        const parts = name.split(' ')

        if (parts.length === 1) {
            return parts[0].charAt(0)
        }

        return parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
    }

    return (
        <div className={className} ref={forwardedRef} {...other}>
            {imgSrc ? (
                <Avatar classes={{ root: classes.avatar }} src={imgSrc} />
            ) : (
                <Avatar classes={{ root: classes.avatar }}>{getUserInitials(user) || ''}</Avatar>
            )}
            {user ? <span className={classes.user}>{user}</span> : null}

            {children}
        </div>
    )
}

UserAvatar.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    forwardedRef: PropTypes.func,
    imgSrc: PropTypes.string,
    user: PropTypes.string,
}

export default withStyles(styles)(UserAvatar)
