import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import SignInWithGoogle from './SignInWithGoogle'


export default function login() {

    const [watchPassword, setWatchPassword] = useState(false);


    function changeType(watchPassword) {
        if (watchPassword == true) {
            return "text"
        } else {
            return "password"
        }
    }



    return (
        <div>
            <div className=" mx-auto lg:mt-6 container max-w-2xl sm:w-3/4 md:w-3/5 sm:mb-2 mt-4 md:shadow-md lg:shadow-lg lg:pb-6 md:pb-4">
                <div className="bg-white space-y-6">
                    <div className="space-y-4 w-full p-4 text-gray-500 items-center">
                        <Image
                            src="/images/FLEXXO.svg"
                            alt="Capsule for one person"
                            height="120"
                            width="260"
                            className=""
                        />
                        <div className="md:w-2/3 max-w-sm mx-auto">
                            <div className="w-full inline-flex border rounded-lg">
                                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50 ml-2">
                                    <svg
                                        fill="none"
                                        className="w-6 text-gray-600 mx-auto"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2  bg-gray-100 bg-opacity-50 placeholder-gray-600"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3 max-w-sm mx-auto ">
                            <div className="w-full inline-flex border rounded-lg">
                                <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50 ml-2">
                                    <svg
                                        fill="none"
                                        className="w-6 text-gray-600 mx-auto"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type={changeType(watchPassword)}
                                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2  bg-gray-100 bg-opacity-50  placeholder-gray-600"
                                    placeholder="Contraseña"
                                />
                                <button className="pt-2 w-1/12 bg-gray-100 bg-opacity-50 mr-2" onClick={() => setWatchPassword(!watchPassword)}>
                                    <Watch watchPassword={watchPassword} />
                                </button>
                            </div>
                            <div className="flex flex-row-reverse align-top sm:text-center">
                                <h1 className="inline-block align-baseline hover:text-blue-darker mb-6">¿Olvidaste tu contraseña?</h1>
                            </div>
                        </div>

                        <ButtonLarge title="Continuar" style="btn-green w-full mx-auto max-w-sm rounded-lg py-2 px-4 focus:outline-none" />
                        <ButtonLarge title="¡Registrate aqui!" style="font-ligth text-xl w-full max-w-sm mx-auto px-4 py-2 rounded-lg border border-primary text-primary shadow-sm hover:shadow-lg" />
                        <div className="mt-4">
                            o
                        </div>
                        <ButtonLarge title="Ingresa con Facebook" style="font-ligth text-xl w-full max-w-sm mx-auto px-4 py-2 rounded-lg text-gray-600 bg-gray-200 shadow-sm hover:shadow-md" />
                        <SignInWithGoogle />
                    </div>
                </div>
            </div>
        </div>
    )
}



const Watch = ({ watchPassword }) => {
    return (
        <div className="">
            {
                !watchPassword &&
                <svg
                    className="w-6 text-gray-600 mx-auto"
                    id="Outline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z" />
                </svg>
            }
            {
                watchPassword &&
                <svg
                    id="Outline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"><title>15 eye</title>
                    <path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z" /><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
                </svg>
            }
        </div>
    )
}


const ButtonLarge = ({ title, style }) => {
    return (
        <div className=" md:px-8 text-center mx-auto md:mb-10">
            <button className={style}   >
                {title}
            </button>
        </div>
    )
}