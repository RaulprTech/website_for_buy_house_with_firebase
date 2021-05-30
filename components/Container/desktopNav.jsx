import React, { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"

import Dropdown from "../Home/dropdown"
import { USER_STATES } from "../../hooks/useUser"

export default function DesktopNav({ user }) {
  let data = ["Nombre", "Email"]

  return (
    <nav className="">
      <div className="container flex-1 mx-auto flex items-center justify-between p-2">
          <Link href="/">
            <Image
              src="/images/for-sale.png"
              alt="logo"
              height="45"
              width="45"
              className="z-30 cursor-pointer"
            />
          </Link>
          {user && <Dropdown name={user.name} user={user} />}
          {user === USER_STATES.NOT_LOGGED && <List />}
      </div>
    </nav>
  )
}

const List = () => {
  const links = [
    { href: "properties", label: "Propiedades" },
    { href: "login", label: "Iniciar Sesión" },
  ]

  return (
    <>
      <ul className="flex items-center justify-between space-x-8 z-30">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href} className="no-underline ">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
