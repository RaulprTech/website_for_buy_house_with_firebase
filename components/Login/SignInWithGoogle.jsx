import React, { useState, useEffect } from 'react'
import { loginWithGoogle, onAuthStateChanged } from '../../firebase/client'
import { USER_STATES } from '../../hooks/useUser';


export default function SigInWithGoogle() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(setUser)
    }, [])

    function handleClickGoogle() {
        loginWithGoogle().then(user => {
            const { avatar, name, email } = user
            setUser(user)
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            {
                user === USER_STATES.NOT_LOGGED &&
                <button onClick={handleClickGoogle} className="font-ligth text-xl w-full max-w-sm mx-auto px-4 py-2 rounded-lg text-gray-600 bg-gray-200 shadow-sm hover:shadow-md"   >
                    Ingresa con Google
                </button>
            }
            {
                user && user.email &&
                <div className="container max-w-sm h-1/5 flex">
                    <img src={user.avatar} />
                    <section className="">
                        <strong>{user.name}</strong>
                        <h2 className="font-thin text-sm">{user.email}</h2>
                    </section>
                </div>
            }
        </div>
    )
}
