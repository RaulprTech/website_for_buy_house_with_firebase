import React, { useState } from 'react'
import Link from 'next/link'


export default function Dates(props) {
    const monthName = ["Enero", "Febrero", "Marzo", "Abril", "Junio", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let now = new Date();
    let date = now.getDate();
    let day = now.getDay();
    let month = now.getMonth();
    let currentMonth = month;
    let year = now.getFullYear();

    function nextMonth() {
        if (month != 11) {
            month++
        } else {
            year++
            month = 0;
        }
    }

    function leapMonth() {
        return ((year % 400 === 0) || (year % 100 != 0) && (year % 100 !== 0));
    }

    function getTotalDays() {
        if (month === -1) month = 11;

        if (month == 3 || month == 5 || month == 8 || month == 10) {
            return 31;
        }
        else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9) {
            return 30;
        } else {
            return leapMonth() ? 29 : 28;
        }
    }

    function Weekend() {
        for (let index = 0; index < 20; index++) {
            return (
                <Day />
            )
        }
    }




    return (
        <>
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
                    <Day day="3" date="27" />
                    <Day day="4" date="28" />
                    <Day day="5" date="29" />
                    <Day day="6" date="30" />
                    <Day day="0" date="31" />
                    <Day day="1" date="1" />
                    <Day day="2" date="2" />
                    <Day day="3" date="3" />
                    <Day day="4" date="4" />
                    <Day day="5" date="5" />
                </div>
                <div className="flex justify-center items-center rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-6 h-6">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </div>
            </div>
            <div className="my-auto overflow-y-scroll scroll-hidden">
                {props.children}
            </div>
            <div className="bg-white absolute bottom-0 w-full border-t border-gray-200 flex place-content-center pt-2 sm:py-6 md:py-8 lg:py-8">
                <Button />
            </div>
        </>

    )
}





const Day = ({ day, date }) => {
    const [dayWeekend, setDayWeekend] = useState(day);

    let days = ["Dom", "Lun", "Mar", "Míe", "Jue", "Vie", "Sab"];

    return (
        <div className="">
            <button className="flex-col justify-center items-center m-3 hover:bg-green-500 group h-12 w-12 rounded-full cursor-pointer leading-5 transition duration-150 ease-in">
                <p className="font-light text-gray-600 text-xs group-hover:text-white">{days[dayWeekend]}</p>
                <h3 className="font-normal text-gray-600 text-xl group-hover:text-white">{date}</h3>
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