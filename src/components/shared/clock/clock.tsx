'use client';

import { useEffect, useState } from "react";
import { ClockSection } from "./clock-section"

const ClockDivider = () => {
    return (
        <span className="w-[2px] h-6 bg-slate-300">

        </span>
    )
}

interface TimeLeft {
    days?: number;
    hrs?: number;
    mins?: number;
    secs?: number;
}

const initalTimeState: TimeLeft = { days: 0, hrs: 0, mins: 0, secs: 0 }

export const Clock = () => {
    const [ timeLeft, setTimeLeft ] = useState<TimeLeft>(initalTimeState);

    const deadline = new Date("2025-01-10")

    useEffect(() => {
        setTimeLeft(getTime())

        const timer = setInterval(() => {
            setTimeLeft(getTime())
        }, 1000)

        return () => clearInterval(timer);
    }, [])

    function getTime(): TimeLeft {
        let timeLeft: TimeLeft = {};
        let currentDate = new Date();
        let difference = deadline.getTime() - currentDate.getTime();

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
                mins: Math.floor((difference / (1000 * 60)) % 60),
                secs: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft;
    }

    return (
        <>
            <div className="flex flex-row gap-3 items-center">
                <ClockSection name='Дней' time={timeLeft.days} />

                <ClockDivider />

                <ClockSection name='Часов' time={timeLeft.hrs} />

                <ClockDivider />

                <ClockSection name='Минут' time={timeLeft.mins} />

                <ClockDivider />

                <ClockSection name='Секунд' time={timeLeft.secs} />
            </div>
        </>
    )
}