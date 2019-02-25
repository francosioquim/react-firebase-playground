import GoogleMapReact from 'google-map-react'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

export const styles = () => ({
    root: { height: '30vh', width: '100%' },
})

const GoogleMapWrapper = (props) => (
    <div className={classNames(props.classes.root, props.className)}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBC6obM6tnvzQqH1OVq0fEzsV2WJ1WQKBE' }}
            defaultCenter={props.defaultCenter}
            center={props.center}
            defaultZoom={props.zoom}
        >
            {props.children}
        </GoogleMapReact>
    </div>
)

GoogleMapWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
    center: PropTypes.object,
    defaultCenter: PropTypes.object,
    zoom: PropTypes.number,
    isMarkerShown: PropTypes.bool,
}

GoogleMapWrapper.defaultProps = {
    defaultCenter: {
        lat: 37.09024,
        lng: -95.712891,
    },
    center: {
        lat: 37.09024,
        lng: -95.712891,
    },
    zoom: 5,
}

export default withStyles(styles)(GoogleMapWrapper)
