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
                                src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
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
                        <div className="flex justify-items-center flex-col flex-1 mt-8">
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



