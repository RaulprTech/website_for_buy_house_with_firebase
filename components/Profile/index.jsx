import { useState } from 'react'
import Link from 'next/link'
import { USER_STATES } from '../../hooks/useUser'

export default function Profile({ user }) {
    console.log(user)
    return (
        <div>
            <div className="mx-auto container max-w-2xl shadow-md">
                <div className="text-center p-6  border-b">
                    {
                        user === USER_STATES.NOT_LOGGED &&
                        <img
                            className="h-24 w-24 rounded-full mx-auto"
                            src="https://www.flaticon.com/vg/vstatic/svg/64/64572.svg?token=exp=1611635245~hmac=eb13a76b80e3b5fa837d6df52279e64a"
                            alt="avatar image"
                        />
                    }
                    {
                        user === USER_STATES.NOT_KNOW &&
                        <div className="flex flex-col justify-center items-center h-screen scroll-hidden">
                            <div className="m-auto w-12 h-12 border-4 border-teal-600 rounded-full loader"></div>
                        </div>
                    }
                    {
                        user &&
                        <img
                            className="h-24 w-24 rounded-full mx-auto"
                            src={user.avatar}
                            alt="avatar image"
                        />
                    }
                    <p className="pt-2 text-lg font-semibold">{user.name}</p>
                    <p className="pt-2 text-md font-light">{user.email}</p>

                    <div className="mt-5">
                        <Link href="/acount/123">
                            <a
                                href="#"
                                className="border rounded py-2 px-4 text-xs font-semibold text-gray-700"
                            >
                                Editar Perfil
                                    </a>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-items-center flex-col flex-1 mt-8 mx-auto justify-center">
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
    )
}



