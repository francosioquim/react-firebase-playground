import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

export const styles = () => ({
    root: {},
})

function Home(props) {
    const { classes, className: classNameProp } = props

    const className = classNames(classes.root, classNameProp)

    return <div className={className}>Home</div>
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
}

export default injectSheet(styles)(Home)
