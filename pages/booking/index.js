import Capsule from '../../components/Booking/capsule'
import { useEffect, useState } from 'react'
import { USER_STATES } from '../../hooks/useUser'
import { useRouter } from 'next/router'
import Header from '../../components/Mybookings/header'


export default function Bookings({ data }) {

    const router = useRouter()
    const [booths, setBooths] = useState([])

    function howPeople(booth) {
        let numberPeople = booth.slice(-1)
        return numberPeople;
    }

    useEffect(() => {
        setBooths(data.booths)
    }, [])

    return (
        <Header>
            {
                (booths === USER_STATES.NOT_KNOW) &&
                <div className="flex flex-col justify-center items-center h-screen scroll-hidden">
                    <div className="m-auto w-12 h-12 border-4 border-teal-600 rounded-full loader"></div>
                </div>
            }
            {booths &&
                booths.map((booth, i) => {
                    return (
                        <div>
                            <Capsule key={i} capsule={booth.code} people="1" img="" location="Aeropuerto de Puebla">
                                <Button code={booth.code} />
                            </Capsule>
                        </div>
                    )
                })
            }
        </Header>
    )
}

const Button = ({ code }) => {
    const router = useRouter()

    return (
        <>
            <button
                type="button"
                className="btn-green"
                onClick={() => router.push(`/booking/${code}`)}
            >
                Reservar
        </button>
        </>
    )
}
export async function getServerSideProps() {
    // params, req, res, query

    const res = await fetch('http://localhost:3000/api/booths')
    const data = await res.json()

    return {
        props: { data }
    }
}

