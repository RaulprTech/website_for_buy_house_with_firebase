import React from 'react'
import Dates from '../components/dates'
import Hour from '../components/hour'
import Container from '../components/container'

export default function schedule() {
    return (
        <Container>
            <div className=" overflow-y-scroll scroll-hidden relative min-w-full h-screen content-center">
                <Nav />
                <Dates>
                    <div className="mt-6 visible sm:invisible md:invisible lg:invisible">
                        <h2 className="visible sm:invisible md:invisible lg:invisible">Selecciona el horario</h2>
                    </div>
                    <div className="w-full pt-6 overflow-y-auto" >
                        <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-x-8 lg:py-12 border-black">
                            <Hour />
                            <Hour />
                            <Hour />
                            <Hour />
                            <Hour />
                            <Hour />
                        </div>
                    </div>
                </Dates>
            </div>
        </Container>
    )
}

const Nav = () => {
    return (
        <nav className="container flex justify-evenly">
            <svg
                width="25"
                height="25"
                fill="currentColor"
                className="text-violet-600"
            >
                <path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z" />
            </svg>
            <h2 className="subtitle">¿Cuando quieres tu reserva?</h2>
        </nav>
    )
}

