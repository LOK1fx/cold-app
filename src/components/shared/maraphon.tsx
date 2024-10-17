import Image from "next/image";

interface Props {
    title: string;
    firstGroupCount: number;
    secondGroupCount: number;
    thirdGroupCount?: number;
    fourthGroupCount?: number;
    imgSource: string;
}

interface GroupProps {
    count?: number;
    title: string;
}

const Group = (props: GroupProps) => {
    return (
        <div className="flex flex-col items-center text-white text-sm">
            <p>{props.title}</p>
            <p className="text-2xl font-black">{props.count}</p>
            <p>участников</p>
        </div>
    )
}

export const Maraphon = (props: Props) => {
    return (
        <div className="w-full min-h-20">
            <div className="relative w-full h-52">
                <Image className="rounded-xl" fill sizes="100%" objectFit="cover" src={props.imgSource} alt='Фото' />
                <div className="flex flex-row">
                    <div className="flex flex-col z-10">
                        <p className="font-bold text-xl text-white">{props.title}</p>

                        <div className="flex flex-row">
                            <Group title={"18-39 лет:"} count={props.firstGroupCount} />
                            <Group title={"40-49 лет:"} count={props.secondGroupCount} />
                        </div>
                        <div className="flex flex-row">
                            <Group title={"50-59 лет:"} count={props.thirdGroupCount} />
                            <Group title={"60-69 лет:"} count={props.fourthGroupCount} />
                        </div>
                    </div>
                </div>
            </div>
            

            
        </div>
    )
}