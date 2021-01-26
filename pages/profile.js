import Link from 'next/link'
import React from 'react'
import Container from '../components/container'

export default function Profile() {
    return (
        <Container>
            <div>
                <div className="my-10 mb-8">
                    <div className="mx-auto lg:mt-14 container max-w-2xl md:w-3/4 shadow-md">
                        <div className="text-center p-6  border-b">
                            <img
                                className="h-24 w-24 rounded-full mx-auto"
                                src="https://www.flaticon.com/svg/vstatic/svg/64/64572.svg?token=exp=1611635245~hmac=eb13a76b80e3b5fa837d6df52279e64a"
                                alt="avatar image"
                            />
                            <p className="pt-2 text-lg font-semibold">Name Example</p>
                            <p className="pt-2 text-md font-light">email@example.com</p>


                            <div className="mt-5">
                                <Link href="/acount">
                                    <a
                                        href="#"
                                        className="border rounded py-2 px-4 text-xs font-semibold text-gray-700"
                                    >
                                        Editar Perfil
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-items-center flex-col flex-1 mt-8 mx-auto">
                            <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                                <p className="text-sm font-medium text-gray-800 leading-none">Ayuda</p>
                            </a>
                            <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                                <p className="text-sm font-medium text-gray-800 leading-none">Legal</p>
                            </a>
                            <a href="#" className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
                                <p className="text-sm font-medium text-gray-800 leading-none">Cerrar Sesión</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}



