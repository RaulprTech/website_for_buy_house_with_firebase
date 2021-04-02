import React, { useState, useEffect } from 'react'
import Dates from '../../../components/Booking/dates';
import Header from '../../../components/Mybookings/header'
import { useRouter } from 'next/router'


export default function Tickets() {

    const router = useRouter()
    const [ticketClick, setTicketClick] = useState(false);
    const { booth } = router.query
    console.log(booth)

    return (
        <div>
            <Header>
                <Dates />
            </Header>
        </div>
    )
}

