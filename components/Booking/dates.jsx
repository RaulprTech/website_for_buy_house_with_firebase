import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import es from 'dayjs/locale/es'

import Hours from './hours'
import useToggle from '../../hooks/useToggle'
import { useRouter } from 'next/router'





export default function Dates() {
    dayjs.locale("es");

    const [date, setDate] = useState([])
    const [day, setDay] = useState([])
    const [month, setMonth] = useState('')
    const [today, setToday] = useState(new Date())
    let now = new Date();

    //console.log(dayjs('2019-01-25').format('DD MMMM YYYY'));
    //let uno = dayjs().add(1, 'week')
    //console.log(dayjs(uno).format('DD'));
    /*
        for (let index = 0; index <= 5; index++) {
            let dia = dayjs().add(index, 'day');
            console.log(dayjs(dia).format('DD'));
        }
    
    */

    function updateMonths(arrayMonths) {
        let firstMonth = dayjs(arrayMonths[0]).format('MMMM');
        let length = arrayMonths.length - 1
        let lastMonth = dayjs(arrayMonths[length]).format('MMMM');
        let fullFirstMonth = dayjs(arrayMonths[length]).format('MMMM YYYY');
        let fullLastMonth = dayjs(arrayMonths[length]).format('MMMM YYYY');
        if (firstMonth == lastMonth) {
            return fullFirstMonth;
        } else {
            return firstMonth + " / " + fullLastMonth;
        }
    }


    function updateWeek(today) {
        let week = [];
        let weekDays = [];
        let currentMonths = [];
        for (let index = 0; index <= 7; index++) {
            let date = dayjs(today).add(index, 'day');
            week[index] = dayjs(date).format('DD')
            weekDays[index] = dayjs(date).format('ddd')
            currentMonths[index] = dayjs(date)
        }
        setDate(week);
        setDay(weekDays)
        setMonth(updateMonths(currentMonths))
    }

    useEffect(() => {
        updateWeek(today)
    }, [today])


    function nextWeek() {
        console.log(dayjs(today).format('DD MMMM YYYY'));
        setToday(dayjs(today).add(1, 'week'));
        //updateWeek(today)
    }

    function backWeek() {
        console.log(dayjs(today).format('DD MMMM YYYY'));
        setToday(dayjs(today).subtract(1, 'week'));
        //updateWeek(today)
    }

    return (
        <div className="rounded-xl shadow-lg overflow-hidden relative min-w-full h-full min-h-full w-full">
            <div className="justify-center mx-auto ">
                <h6 className=" text-base font-normal">{`${month}`}</h6>
            </div>
            <div className="text-gray-800 rounded-xl overflow-x-hidden relative min-h-50 w-full flex justify-between">
                <div className="flex justify-center items-center rounded-full cursor-pointer">
                    {
                        today > now &&
                        <button onClick={() => backWeek()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-6 h-6">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                    }
                </div>
                <div className="mx-auto overflow-x-auto flex justify-between scroll-hidden">
                    {
                        date.map((d, i) => {
                            return (
                                <Day key={i} today={day[i]} dateToday={d} />
                            )
                        })
                    }
                </div>
                <div className="flex justify-center items-center rounded-full cursor-pointer">
                    <button onClick={() => nextWeek()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left w-6 h-6">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bg-white h-full w-full pb-20 overflow-y-auto" >
                <Hours />
            </div>
            <div className="bg-white py-2 absolute bottom-0 w-full flex place-content-center sm:py-6 md:py-6 lg:py-6 mt-auto">
                <Continuar />
            </div>
        </div>
    )
}



const Day = ({ today, dateToday, state }) => {
    const [isOn, toggleIsOn] = useToggle(state);

    return (
        <div className="">
            {
                isOn ?
                    <button className="flex-col justify-center items-center m-3 bg-primary group h-12 w-12 rounded-full cursor-pointer leading-5 transition duration-150 ease-in focus-within:outline-none" onClick={toggleIsOn}>
                        <p className="font-light text-white text-xs group-hover:text-white">{today}</p>
                        <h3 className="font-normal text-white text-xl group-hover:text-white">{dateToday}</h3>
                    </button>
                    :
                    <button className="flex-col justify-center items-center m-3 hover:bg-primary group h-12 w-12 rounded-full cursor-pointer leading-5 transition duration-150 ease-in focus-within:outline-none" onClick={toggleIsOn}>
                        <p className="font-light text-gray-600 text-xs group-hover:text-white">{today}</p>
                        <h3 className="font-normal text-gray-600 text-xl group-hover:text-white">{dateToday}</h3>
                    </button>
            }
        </div>
    )
}



const Continuar = () => {
    const router = useRouter()

    return (
        <>
            <button
                type="button"
                className="btn-green min-w-full"
                onClick={() => router.push('/booking/PCB2/01-febrero-2021/21:00/21:15')}
            >
                Continuar
        </button>
        </>
    )
}