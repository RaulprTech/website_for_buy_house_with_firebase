import React from 'react'
import Dates from '../components/dates'
import Hour from '../components/hours'
import Container from '../components/container'

export default function schedule() {
    return (
        <Container>
            <div className="h-full overflow-y-hidden relative min-w-50">
                <Nav />
                <Dates>
                    <div className="flex-1 mt-2 p-2">
                        <h2 className="">Selecciona el horario</h2>
                    </div>
                    <div className="w-full h-screen overflow-y-auto scroll-hidden">
                        <div className="flex-row flex-wrap inline-flex justify-around border-black">
                            <Hour />
                            <Hour />
                            <Hour />
                            <Hour />
                            <Hour />
                            <Hour />
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
        <nav className="container flex justify-center visible sm:invisible md:invisible lg:invisible mb-4">
            <svg
                width="25"
                height="25"
                fill="currentColor"
                className="text-violet-600"
            >
                <path d="M10.88,17.715a1,1,0,0,0,0-1.415L7.588,13.007,18,13a1,1,0,0,0,0-2l-10.414.007L10.88,7.715A1,1,0,0,0,9.466,6.3L5.88,9.886a3,3,0,0,0,0,4.243l3.586,3.586A1,1,0,0,0,10.88,17.715Z" />
            </svg>
            <h2 className="subtitle ml-6 visible sm:invisible md:invisible lg:invisible">¿Cuando quieres tu reserva?</h2>
        </nav>
    )
}

