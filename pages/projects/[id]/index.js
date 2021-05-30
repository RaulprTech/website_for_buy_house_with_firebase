import React, { useState, useEffect } from "react"
import Capsule from "../../../components/Booking/capsule"
import Control from "../../../components/control"
import Header from "../../../components/Cards/header"
import Post from "../../../components/Cards/Post"
import { useRouter } from "next/router"

export default function Tickets() {
  const router = useRouter()
  const [ticketClick, setTicketClick] = useState(false)
  const { id } = router.query
  console.log(id)

  return (
    <div>
      <Header>
        <div className="md:grid md:grid-cols-3 md:grid-rows-7 md:grid-flow-row">
          <Post info={id} />
        </div>
      </Header>
    </div>
  )
}
