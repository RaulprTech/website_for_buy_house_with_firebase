import '../styles/globals.css'
import React from 'react'
import Container from '../components/Container'
import { ProvideAuth } from "../hooks/useAuth";


function MyApp({ Component, pageProps }) {
    return (
        <ProvideAuth>
            <Container>
                <Component {...pageProps} />
            </Container>
        </ProvideAuth>
    )
}

export default MyApp
