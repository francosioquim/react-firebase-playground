import { Grid } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = () => ({
    root: {
        cursor: 'pointer',
    },
})
function GroupItem(props) {
    const { avatar, classes, className: classNameProp, group, onItemClick } = props

    const className = classNames(classes.root, classNameProp)

    const handleClick = () => {
        if (onItemClick) {
            onItemClick(group.slug || 'error')
        }
    }

    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <ListItem className={className} onClick={handleClick}>
                {avatar}
                <ListItemText primary={group.name} secondary={group.state} />
            </ListItem>
        </Grid>
    )
}

GroupItem.propTypes = {
    avatar: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    onItemClick: PropTypes.func,
    group: PropTypes.object,
}

export default withStyles(styles)(GroupItem)
