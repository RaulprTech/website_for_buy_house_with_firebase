import '../styles/globals.css'
import React from 'react'
import Container from '../components/Container'
import { ProvideAuth } from "../hooks/useAuth";
import Footer from "../components/Container/Footer"


function MyApp({ Component, pageProps }) {
    return (
        <ProvideAuth>
            <Container>
                <Component {...pageProps} />
                <Footer />
            </Container>
        </ProvideAuth>
    )
}

export default MyApp
