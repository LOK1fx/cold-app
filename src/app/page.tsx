/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { Clock } from "@/components/shared/clock/clock";
import { Maraphon } from "@/components/shared/maraphon";
import { Button } from "@/components/ui/button";
import { Check, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface News {
  id: number;
  title: string;
  text: string;
}

interface InfoProps {
  title: string;
  text: string;
}

const InfoSection = (props: InfoProps) => {
  return (
    <>
      <div className="flex flex-row justify-start gap-2 items-center">
        <Check size={48} color={'blue'} className="flex-0" />
        <div className="flex flex-col whitespace-pre-line">
          <p className="font-bold">{props.title}</p>
          <p className="text-sm">{props.text}</p>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  const [ news, setNews ] = useState<News[]>();
  const [ name, setName ] = useState<string>('');

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch("https://api.kupi-mit.ru/api/pbsschedule/news")

      return await response.json();
    }

    if (typeof window !== 'undefined') {
      setName(sessionStorage.getItem('name') ? String(sessionStorage.getItem('name')) : '');
    }

    getNews().then(res => setNews(res));
  }, [])

  if(typeof window !== 'undefined'){
    if (!sessionStorage.getItem('name'))
      document.location.href = '/login';
  }

  return (
    <div className="flex flex-col items-center bg-slate-50 min-h-screen">
      <div className="flex flex-col items-center gap-4 min-h-32 py-6">
        <h1 className="font-black text-2xl">{"До старта марафона:"}</h1>

        {/* часики */}
        <Clock />

      </div>
      

      <div className="bg-white max-w-screen-md w-full min-h-screen rounded-3xl py-2 px-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-black text-xl">{`Для Вас, ${name}`}</h1>
          

          <div className="flex flex-row gap-2">
            <Link href={'https://wa.me/79243689649'}><Button className="rounded-full" variant='secondary'><MessageCircle /></Button></Link>
            <Link href={'mailto:nsapoleofcold@gmail.com'}><Button className="rounded-full" variant='secondary'><Mail /></Button></Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-4">
          <h2 className="font-bold text-xl">{'Новости:'}</h2>

          {news?.map((neww, index) => (
            <p key={index}><span className="font-bold">{`${neww.title}: `}</span>{neww.text}</p>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <InfoSection title="УЧАСТНИКИ ПРОБЕГА" text="Любители бега от 18 лет до 70 лет." />
          <InfoSection title="МЕСТО И ВРЕМЯ ПРОВЕДЕНИЯ" text="Забег проводится в с 10 по 12 января 2025 года на территории Оймяконского района Республики Саха (Якутия) 11:00 ч." />
          <InfoSection title="ФИНАНСИРОВАНИЕ" text="Расходы по подготовке и организации марафона, также призового фонда финансируются за счет оплаты слотов и спонсорских средств." />
          <InfoSection title="Абсолютные победители дистанции полумарафона 21 км. 200 м." text="Любители бега от 18 лет до 70 лет." />
          <InfoSection title="Абсолютные победители дистанции марафона 42 км. 195 м." text="Любители бега от 18 лет до 70 лет." />
          <InfoSection title="Абсолютные победители дистанции супермарафона 50 км." text="Любители бега от 18 лет до 70 лет." />
        </div>

        <div className="flex flex-col gap-4 items-center mt-4">
          <Maraphon imgSource={'/image_2.png'} title="С 150м до 15км" firstGroupCount={30} secondGroupCount={30} thirdGroupCount={20} fourthGroupCount={20} />
          <Maraphon imgSource={'/image_2.png'} title="Полумарафон" firstGroupCount={30} secondGroupCount={30} thirdGroupCount={20} fourthGroupCount={20} />
          <Maraphon imgSource={'/image_2.png'} title="Марафон" firstGroupCount={30} secondGroupCount={30} thirdGroupCount={20} />
          <Maraphon imgSource={'/image_2.png'} title="СУПЕРМАРАФОН" firstGroupCount={40} secondGroupCount={40} />
        </div>
        
      </div>
    </div>
  );
}
