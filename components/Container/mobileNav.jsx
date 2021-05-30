import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { USER_STATES } from '../../hooks/useUser';


export default function MobileNav({ user }) {

    const [links, setLinks] = useState([]);

    const linksLogin = [
        { href: '/', label: 'Inicio' },
        { href: '/explore', label: 'Explorar' },
        { href: '/tickets/123', label: 'Mis Reservas' },
        { href: `/profile/123`, label: 'Perfil' }
    ]
    //${user.uid}
    const linksLogout = [
        { href: '/', label: 'Inicio' },
        { href: '/explore', label: 'Explorar' },
        { href: '/login', label: 'Iniciar Sesión' }
    ]

    useEffect(() => {
        if (user) {
            setLinks(linksLogin)
        } else if (user === USER_STATES.NOT_KNOW) {
            setLinks(linksLogout)
        } else if (user === USER_STATES.NOT_LOGGED) {
            setLinks(linksLogout)
        }
    }, [user])

    return (
        <>
            <nav className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex z-40">
                {links.map(({ href, label }) => (
                    <Link href={href} key={`${href}${label}`}>
                        <a className="flex flex-grow items-center justify-center p-2 text-balck-500 hover:text-green-500">
                            <Element label={label}>
                                {iconSelect(`${label}`)}
                            </Element>
                        </a>
                    </Link>
                ))}

            </nav>
        </>
    )
}

const Element = (props) => {
    return (
        <div className="text-center text-gray-600 group">
            <span className="block h-8 text-3xl leading-8">
                <svg
                    fill="currentColor"
                    className="w-6  mx-auto group-hover:text-primary text-gray-600"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {
                        props.children
                    }
                </svg>

            </span>
            <span className="block text-xs leading-none group-hover:text-primary">{props.label}</span>
        </div>
    )
}

function iconSelect(href) {
    switch (href) {
        case "Inicio":
            return (
                <>
                    <path
                        d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"
                    />
                </>
            )
        case "Cápsulas":
            return (
                <>
                    <path

                        d="M17,0H7A5.006,5.006,0,0,0,2,5V19a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,17,0ZM7,2H17a3,3,0,0,1,3,3v6H4V5A3,3,0,0,1,7,2ZM17,22H7a3,3,0,0,1-3-3V13H20v6A3,3,0,0,1,17,22Z" />
                </>
            )
        case "Mis Reservas":
            return (
                <>
                    <path
                        d="M16,0h-.13a2.02,2.02,0,0,0-1.941,1.532,2,2,0,0,1-3.858,0A2.02,2.02,0,0,0,8.13,0H8A5.006,5.006,0,0,0,3,5V21a3,3,0,0,0,3,3H8.13a2.02,2.02,0,0,0,1.941-1.532,2,2,0,0,1,3.858,0A2.02,2.02,0,0,0,15.87,24H18a3,3,0,0,0,3-3V5A5.006,5.006,0,0,0,16,0Zm2,22-2.143-.063A4,4,0,0,0,8.13,22H6a1,1,0,0,1-1-1V17H7a1,1,0,0,0,0-2H5V5A3,3,0,0,1,8,2l.143.063A4.01,4.01,0,0,0,12,5a4.071,4.071,0,0,0,3.893-3H16a3,3,0,0,1,3,3V15H17a1,1,0,0,0,0,2h2v4A1,1,0,0,1,18,22Z" />
                    <path
                        d="M13,15H11a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
                </>

            )
        case "Perfil":
            return (
                <>
                    <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM7,22V21a5,5,0,0,1,10,0v1Zm15-3a3,3,0,0,1-3,3V21A7,7,0,0,0,5,21v1a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z" /><path d="M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z" />
                </>
            )
        case "Iniciar Sesión":
            return (
                <>
                    <path d="M19,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,19,0ZM7,22V21a5,5,0,0,1,10,0v1Zm15-3a3,3,0,0,1-3,3V21A7,7,0,0,0,5,21v1a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z" /><path d="M12,4a4,4,0,1,0,4,4A4,4,0,0,0,12,4Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,10Z" />
                </>
            )
    }
}
