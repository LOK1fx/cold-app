'use client';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function LoginPage() {
    const [name, setName] = useState('');

    const onRegBtn = () => {
        sessionStorage.setItem('name', name);
    }

    return (
        <div className="flex flex-col items-center overflow-auto w-full h-screen">
            <div className="absolute -z-10 h-96 w-full max-w-screen-md">
                <Image priority={true} fill={true} objectFit="cover" className="overflow-hidden" src={'/q8aeYHIjZ2M.jpg'} alt="banner" />
            </div>
            
            <div className="flex flex-col w-screen h-full justify-start">
                <h1 className="font-black text-2xl whitespace-pre-line text-center pt-12">{'«Полюс Холода – Оймякон» \n2025 г.'}</h1>

                <div className="h-40">

                </div>

            
                <div className="flex flex-col relative overflow-hidden">
                    <div className="bg-white self-center w-full max-w-screen-md max-h-screen rounded-3xl py-4 px-6 overflow-hidden">
                        <div className="flex flex-col gap-4 justify-center">
                            <h1 className="font-black text-2xl">{"Регистрация"}</h1>

                            <div className="flex flex-col justify-center gap-2 w-full h-full px-2">
                                <Input onChange={e => setName(e.target.value)} placeholder="Имя" />
                                <Input type='tel' placeholder="Номер телефона" />
                                <div className="flex items-center gap-2 px-2 h-8">
                                    <Checkbox id="terms" />
                                    <p className="text-sm opacity-80">Я согласен с <span className="text-blue-600">тем-то тем-то</span></p>
                                </div>

                                <Link href={'/'} className="self-center">
                                    <Button onClick={onRegBtn} className="h-12 w-full">Зарегистрироваться</Button>
                                </Link>
                                

                                <p className="text-sm text-center">Или <span className="text-blue-600">{"у меня уже есть аккаунт (войти)"}</span></p>
                            </div> 
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col-reverse h-fit py-4 px-2 text-center opacity-80 text-sm whitespace-pre-line">
                    <p>{"Региональная площадка, направленная на выявление и поддержку любителей бега в экстремальных условиях, брендирования туристического кластера Полюс Холода – Оймякон. Имеет статус открытого соревнования."}</p>
                </div>
            </div>
            
        </div>
    )
}