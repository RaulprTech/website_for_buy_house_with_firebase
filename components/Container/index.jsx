import Nav from "./nav"
import Image from "next/image"

import { useState, useEffect } from "react"

import useUser from "../../hooks/useUser"

import Banner from "../Landing/Banner"

export default function Container(props) {
  const user = useUser()

  return (
    <>
      <div className="overflow-hidden relative min-w-full h-screen content-center">
        <Banner />
        <Nav user={user}>
          <div className="h-full w-full pb-20 overflow-y-scroll mx-auto pb-6">
            {props.children}
          </div>
        </Nav>
      </div>
    </>
  )
}
