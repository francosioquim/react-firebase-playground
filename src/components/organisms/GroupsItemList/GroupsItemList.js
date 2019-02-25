import { Avatar, Grid, withStyles } from '@material-ui/core'

import GroupItem from 'components/molecules/GroupItem'
// import ImageIcon from '@material-ui/icons/Image'
import List from '@material-ui/core/List'
import PropTypes from 'prop-types'
import React from 'react'
import { random } from 'faker'

const styles = (theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
})

function GroupsItemList(props) {
    const { classes, groups, onItemClick } = props

    return (
        <div className={classes.root}>
            <List>
                <Grid container spacing={24}>
                    {groups && groups.length
                        ? groups.map((group, index) => (
                              <GroupItem
                                  key={index}
                                  group={group}
                                  description={group.description}
                                  onItemClick={onItemClick}
                                  avatar={<Avatar src={random.image()} />}
                              />
                          ))
                        : null}
                </Grid>
            </List>
        </div>
    )
}

GroupsItemList.propTypes = {
    classes: PropTypes.object.isRequired,
    groups: PropTypes.array,
    onItemClick: PropTypes.func,
}

export default withStyles(styles)(GroupsItemList)
