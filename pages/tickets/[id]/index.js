import React, { useState, useEffect } from 'react'
import Capsule from '../../../components/Booking/capsule';
import Control from '../../../components/control'
import Header from '../../../components/Mybookings/header'
import Info from '../../../components/Mybookings/infoBooking'
import { useRouter } from 'next/router'


export default function Tickets() {

    const router = useRouter()
    const [ticketClick, setTicketClick] = useState(false);
    const { id } = router.query
    console.log(id)

    return (
        <div>
            <Header>
                {!ticketClick &&
                    <button className="focus:outline-none" onClick={() => setTicketClick(true)}>
                        <Capsule capsule="PBC1" people="1" location="Aeropuerto de Puebla" >
                            <Info date="Miercoles 26, enero" hour="20:00 - 20:15" />
                        </Capsule>
                    </button>
                }
                {
                    ticketClick && <Control hour="20:00 - 20:15" />
                }
            </Header>
        </div>
    )
}


