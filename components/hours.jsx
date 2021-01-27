import React from 'react'

export default function hours() {
    return (
        <div className="m-4 py-4 px-2 bg-gray-200 rounded-xl">
            <h2 className="mb-4">De 00:00 a 00:59</h2>
            <div className="container flex justify-center">
                <Hour minutes="1 - 15" />
                <Hour minutes="16 - 30" />
                <Hour minutes="31 - 45" />
                <Hour minutes="46 - 60" />
            </div>
        </div>
    )
}


function Hour({ minutes }) {
    return (
        <button className="bg-white rounded-md hover:text-white hover:bg-green-500 m-2">
            <p className="px-3 py-1 text-xs font-normal">{minutes}</p>
        </button>
    )
}