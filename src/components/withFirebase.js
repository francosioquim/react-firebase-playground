import FirebaseContext from './FirebaseContext'
import React from 'react'

// eslint-disable-next-line
const withFirebase = (Component) => (props) => {
    return (
        <FirebaseContext.Consumer>
            {(firebase) => <Component {...props} firebase={firebase} />}
        </FirebaseContext.Consumer>
    )
}

export default withFirebase
