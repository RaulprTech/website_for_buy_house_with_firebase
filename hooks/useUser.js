import Router from 'next/dist/next-server/lib/router/router'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from '../firebase/client'

import { useRouter } from 'next/router'

export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOW: undefined
}

export default function useUser() {
    const [user, setUser] = useState(USER_STATES.NOT_KNOW)

    useEffect(() => {
        onAuthStateChanged(setUser)
    }, [])
    /*
    const router = useRouter();
        useEffect(() => {
            user === USER_STATES.NOT_LOGGED && Router.push('/')
        }, [user])
    */
    return user;
}