import React, { useState, useEffect } from 'react';

import Link from 'next/link'
import Image from 'next/image'

import Dropdown from '../Home/dropdown'

import { USER_STATES } from '../../hooks/useUser';


export default function DesktopNav({ user }) {

  let data = ["Nombre", "Email"]

  return (
    <>
      <nav className="container flex-1 mx-auto">
        <div className="flex items-center justify-between p-6">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="Capsule for one person"
              height="45"
              width="45"
              className="z-30"
            />
          </Link>
          {
            user && <Dropdown name={user.name} user={user} />
          }
          {
            user === USER_STATES.NOT_LOGGED && <List />
          }
        </div>
      </nav>
    </>
  )
}

const List = () => {

  const links = [
    { href: '/login', label: 'Iniciar Sesión' },
    { href: '/logup', label: 'Registrarme' },
  ]

  return (
    <>
      <ul className="flex items-center justify-between space-x-4 z-30">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a href={href} className="no-underline ">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}