'use client';

interface Props {
    name: string;
    time?: number;
}

export const ClockSection = (props: Props) => {
    const formatTime = (time: number | undefined): string => {
        if (time === undefined)
            return ""

        let string = String(time);

        if (string.length < 2)
            string = '0' + string;

        return string;
    }

    return (
        <div className="flex flex-col items-center justify-between">
            <h2 className="font-black text-3xl">{formatTime(props.time)}</h2>
            <p className="">{props.name}</p>
        </div>
    )
}