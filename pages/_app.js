import '../styles/globals.css'
import React, { Suspense } from 'react'
import firebaseConfig from '../firebaseConfig'
import { FirebaseAppProvider } from 'reactfire'


function MyApp({ Component, pageProps }) {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Component {...pageProps} />
        </FirebaseAppProvider>)
}

export default MyApp
