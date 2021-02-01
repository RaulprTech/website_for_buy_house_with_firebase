import React from 'react'
import useToggle from '../../hooks/useToggle'
import { useRouter } from 'next/router'



export default function Hours() {
    return (
        <div className="overflow-y-hidden relative min-w-full">
            <div className="flex-1 p-3">
                <h2 className="">Selecciona el horario</h2>
            </div>
            <div className="w-full h-full max-h-96 overflow-y-scroll scroll-hidden my-auto flex justify-center">
                <div className="flex-row flex-wrap inline-flex justify-around h-full w-full py-4">
                    <Hour hour="De 00:00 a 00:59" />
                    <Hour hour="De 01:00 a 01:59" />
                    <Hour hour="De 02:00 a 02:59" />
                    <Hour hour="De 03:00 a 03:59" />
                    <Hour hour="De 04:00 a 04:59" />
                    <Hour hour="De 05:00 a 05:59" />
                    <Hour hour="De 06:00 a 06:59" />
                    <Hour hour="De 07:00 a 07:59" />
                    <Hour hour="De 08:00 a 08:59" />
                    <Hour hour="De 09:00 a 09:59" />
                    <Hour hour="De 10:00 a 10:59" />
                    <Hour hour="De 11:00 a 11:59" />

                </div>
            </div>
        </div>
    )
}

function Hour({ hour }) {

    return (
        <div className="mt-4 mb-4 py-4 px-6 bg-gray-200 rounded-xl">
            <h2 className="font-medium mb-2">{hour}</h2>
            <div className="container flex justify-center">
                <Quarter minutes="01 - 15" state={false} />
                <Quarter minutes="16 - 30" state={false} />
                <Quarter minutes="31 - 45" state={false} />
                <Quarter minutes="46 - 60" state={false} />
            </div>
        </div>
    )
}


function Quarter({ minutes, state }) {
    const [isOn, toggleIsOn] = useToggle(state);
    const router = useRouter();



    return (
        <>
            {
                isOn ?
                    <button className="bg-primary text-white rounded-md hover:text-white hover:bg-primary m-1 focus-within:outline-none" onClick={toggleIsOn}>
                        <p className="px-1 py-1 text-xs font-normal">{minutes}</p>
                    </button>
                    :
                    <button className="bg-white rounded-md hover:text-white hover:bg-primary m-1 focus-within:outline-none" onClick={toggleIsOn}>
                        <p className="px-1 py-1 text-xs font-normal">{minutes}</p>
                    </button>
            }
        </>
    )
}


// Usage
/*
function App() {
    const [isOn, toggleIsOn] = useToggle();

    return (
        <button onClick={toggleIsOn}>
            Turn  {isOn ? 'Off' : 'On'}
        </button>
    );
}
*/