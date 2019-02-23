import 'firebase/auth'
import 'firebase/database'

import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_KEY,
    FIREBASE_DATABASE_URL,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
} from '../config'

import app from 'firebase/app'

export const getFirebaseConfig = () => ({
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_KEY,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
})

class Firebase {
    constructor() {
        app.initializeApp(getFirebaseConfig())

        this.auth = app.auth()
    }
}

export default Firebase
