import React from 'react'
import SignIn from '../components/Login/SignIn'
import useUser, { USER_STATES } from '../hooks/useUser'
import { useRouter } from 'next/router'


export default function login() {
    const user = useUser()
    return (
        <div>
            <SignIn />

        </div>
    )
}


/*

            {
                USER_STATES.NOT_LOGGED && <SignIn />
            }
            {
                user && router.push('/')
            }
            {
                (user === USER_STATES.NOT_KNOW) &&
                <div className="flex flex-col justify-center items-center h-screen scroll-hidden">
                    <div className="m-auto w-12 h-12 border-4 border-teal-600 rounded-full loader"></div>
                </div>
            }


            */