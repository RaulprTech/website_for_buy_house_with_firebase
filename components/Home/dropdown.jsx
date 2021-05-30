import React, { useEffect, useState } from "react"
import Profile from '../Profile'

export default function Select({ name, user }) {
    const [open, setOpen] = useState(false)
    const [val, setVal] = useState("")
    const [fondo, setFondo] = useState("")

    useEffect(() => {
        if (open === false) {
            setFondo("bg-transparent")
        } else {
            setFondo("bg-white")
        }
    }, [open])


    return (
        <div className="z-30">
            <div className="mt-1 relative">
                <button
                    onClick={() => setOpen(!open)}
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded="true"
                    aria-labelledby="listbox-label"
                    className="relative w-full rounded-md pl-3 py-2 text-right cursor-default focus:outline-none sm:text-sm"
                >
                    <span className="flex items-center">
                        <svg
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="text-violet-600"
                        >
                            <path d="M19 0H5a5.006 5.006 0 00-5 5v14a5.006 5.006 0 005 5h14a5.006 5.006 0 005-5V5a5.006 5.006 0 00-5-5zM7 22v-1a5 5 0 0110 0v1zm15-3a3 3 0 01-3 3v-1a7 7 0 00-14 0v1a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3z" />
                            <path d="M12 4a4 4 0 104 4 4 4 0 00-4-4zm0 6a2 2 0 112-2 2 2 0 01-2 2z" />
                        </svg>
                        <span className="ml-2 block truncate">{val || name}</span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
                        <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </button>

                <div className={`absolute mt-1 w-full rounded-md ${fondo}`}>
                    {open &&

                        <Profile user={user} />
                    }
                </div>
            </div>
        </div>
    )
}



