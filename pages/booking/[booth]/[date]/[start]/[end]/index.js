import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useUser, { USER_STATES } from '../../../../../../hooks/useUser'
import SignIn from '../../../../../../components/Login/SignIn'

export default function Bookings({ data }) {
    const user = useUser();

    const router = useRouter()
    const [booths, setBooths] = useState([])

    return (
        <div>
            {
                user && <h1>Reserva Exitosa</h1>
            }
            {
                user === USER_STATES.NOT_LOGGED &&
                <SignIn />
            }
            {
                (user === USER_STATES.NOT_KNOW) &&
                <div className="flex flex-col justify-center items-center h-screen scroll-hidden">
                    <div className="m-auto w-12 h-12 border-4 border-teal-600 rounded-full loader"></div>
                </div>
            }
        </div>
    )
}