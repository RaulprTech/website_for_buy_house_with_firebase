import React, { useState, useEffect } from 'react'
import Container from '../components/container'
import Capsule from '../components/capsule';



export default function Tickets() {



    return (
        <Container>
            <h1 className="title">Reservas</h1>
            <Capsule capsule="PBC1" people="1" location="Aeropuerto de Puebla" >
                <Data date="Miercoles 26, enero" hour="20:00 - 20:15" />
            </Capsule>
        </Container>
    )
}



const Data = ({ date, hour }) => (
    <>
        <div>
            <div className="flex items-center pb-4 text-sm font-medium text-gray-700">
                <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="text-violet-600"
                >
                    <path d="M7.5,13A4.5,4.5,0,1,1,12,8.5,4.505,4.505,0,0,1,7.5,13Zm0-7A2.5,2.5,0,1,0,10,8.5,2.5,2.5,0,0,0,7.5,6ZM15,23v-.5a7.5,7.5,0,0,0-15,0V23a1,1,0,0,0,2,0v-.5a5.5,5.5,0,0,1,11,0V23a1,1,0,0,0,2,0Zm9-5a7,7,0,0,0-11.667-5.217,1,1,0,1,0,1.334,1.49A5,5,0,0,1,22,18a1,1,0,0,0,2,0ZM17.5,9A4.5,4.5,0,1,1,22,4.5,4.505,4.505,0,0,1,17.5,9Zm0-7A2.5,2.5,0,1,0,20,4.5,2.5,2.5,0,0,0,17.5,2Z" />
                </svg>
                <h3 className="subtitle ml-2">{date}</h3>
            </div>
            <div className="flex items-center pb-4 text-sm font-medium text-gray-700">
                <svg
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="text-violet-600"
                >
                    <path d="M7.5,13A4.5,4.5,0,1,1,12,8.5,4.505,4.505,0,0,1,7.5,13Zm0-7A2.5,2.5,0,1,0,10,8.5,2.5,2.5,0,0,0,7.5,6ZM15,23v-.5a7.5,7.5,0,0,0-15,0V23a1,1,0,0,0,2,0v-.5a5.5,5.5,0,0,1,11,0V23a1,1,0,0,0,2,0Zm9-5a7,7,0,0,0-11.667-5.217,1,1,0,1,0,1.334,1.49A5,5,0,0,1,22,18a1,1,0,0,0,2,0ZM17.5,9A4.5,4.5,0,1,1,22,4.5,4.505,4.505,0,0,1,17.5,9Zm0-7A2.5,2.5,0,1,0,20,4.5,2.5,2.5,0,0,0,17.5,2Z" />
                </svg>
                <h3 className="subtitle ml-2">{hour}</h3>
            </div>
        </div>
    </>
)

