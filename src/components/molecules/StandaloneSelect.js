import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import MenuItem from '@material-ui/core/MenuItem'
import PropTypes from 'prop-types'
import React from 'react'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames'
import injectSheet from 'react-jss'

export const styles = (theme) => ({
    root: (props) => ({
        color: props.color === 'primary' ? theme.palette.primary.main : theme.palette.text.secondary,
    }),
    formControl: {
        margin: theme.spacing.unit,
    },
    selectMenu: {
        whiteSpace: 'normal',
    },
    popover: {
        maxHeight: 300,
        '& > ul': {
            padding: 0,
        },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        minHeight: 36,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        fontFamily: theme.typography.fontFamilySecondary,
        letterSpacing: theme.typography.pxToRem(1.4),
        pointerEvents: 'none',
    },
    select: (props) => {
        const fontStyle = props.size === 'large' ? theme.typography.headline : theme.typography.body1

        return {
            color: props.color === 'primary' ? theme.palette.primary.main : theme.palette.text.primary,
            lineHeight: 'normal',
            ...fontStyle,
        }
    },
})

class StandaloneSelect extends React.Component {
    static defaultProps = {
        size: 'small',
        value: '',
        disableUnderline: true,
        color: 'primary',
    }

    handleChange = (event) => {
        const { onChange } = this.props
        if (onChange) {
            onChange(event.target.value || null)
        }
    }

    render() {
        const {
            classes,
            className: classNameProp,
            iconClassName,
            menuItems,
            emptyLabel,
            name,
            menuTitle,
            value,
            disableUnderline,
        } = this.props

        const className = classNames(classes.root, classNameProp)

        const renderMenuItems = () =>
            menuItems.map((menuItem) => (
                <MenuItem key={menuItem.value} value={menuItem.value}>
                    {menuItem.label}
                </MenuItem>
            ))

        return (
            <Select
                value={value}
                onChange={this.handleChange}
                name={name}
                IconComponent={KeyboardArrowDown}
                displayEmpty
                disableUnderline={disableUnderline}
                MenuProps={{
                    className: classes.menu,
                    getContentAnchorEl: null,
                    PopoverClasses: {
                        paper: classes.popover,
                    },
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'center',
                    },
                    transformOrigin: {
                        horizontal: 'center',
                        vertical: 'top',
                    },
                }}
                classes={{
                    root: className,
                    icon: iconClassName,
                    selectMenu: classes.selectMenu,
                    select: classes.select,
                }}
            >
                {menuTitle && (
                    <Typography className={classes.header} variant="caption" align="center">
                        {menuTitle}
                    </Typography>
                )}
                {emptyLabel && <MenuItem value="">{emptyLabel}</MenuItem>}
                {menuItems ? renderMenuItems() : null}
            </Select>
        )
    }
}

StandaloneSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    menuItems: PropTypes.array,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    menuTitle: PropTypes.string,
    emptyLabel: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    disableUnderline: PropTypes.bool,
    color: PropTypes.oneOf(['text', 'primary']),
}

export default injectSheet(styles)(StandaloneSelect)
