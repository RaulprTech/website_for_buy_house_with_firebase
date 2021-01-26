import React from 'react'
import Link from 'next/link'


export default function Dates(props) {
    return (
        <div>
            <div className="justify-center mx-auto z-30">
                <h6 className=" text-base font-normal z-40">Enero 2021</h6>
            </div>
            <div className="text-gray-800 rounded-xl overflow-x-hidden relative min-h-50 w-full flex justify-between z-30">
                <div className="flex justify-center items-center rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-6 h-6">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </div>
                <div className="mx-auto overflow-x-scroll flex justify-between scroll-hidden">
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                </div>
                <div className="flex justify-center items-center rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-6 h-6">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
            <div className="mx-auto overflow-y-scroll scroll-hidden relative min-w-full h-screen content-center">
                {props.children}
            </div>
            <div className="py-4">
                <Button />
            </div>
        </div>

    )
}




const Day = () => {
    return (
        <div className="">
            <button className="flex-col justify-center items-center m-3 hover:bg-green-500 group h-12 w-12 rounded-full cursor-pointer leading-5 transition duration-150 ease-in">
                <p className="font-light text-gray-600 text-xs group-hover:text-white">lun</p>
                <h3 className="font-normal text-gray-600 text-xl group-hover:text-white">18</h3>
            </button>
        </div>
    )
}



const Button = () => (
    <>
        <Link href="/schedule">
            <button
                type="button"
                className="btn-green"
            >
                Reservar
        </button>
        </Link>
    </>
)