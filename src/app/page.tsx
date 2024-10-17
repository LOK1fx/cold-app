/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { Clock } from "@/components/shared/clock/clock";
import { Maraphon } from "@/components/shared/maraphon";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface News {
  id: number;
  title: string;
  text: string;
}


export default function Home() {
  const [ news, setNews ] = useState<News[]>();

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch("https://api.kupi-mit.ru/api/pbsschedule/news")

      return await response.json();
    }

    getNews().then(res => setNews(res));
  }, [])

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="flex flex-col items-center gap-4 min-h-32 py-6">
        <h1 className="font-black text-2xl">{"До старта марафона:"}</h1>

        {/* часики */}
        <Clock />

      </div>
      

      <div className="bg-white w-full min-h-screen rounded-3xl py-2 px-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-black text-xl">{"Для Вас, Имя"}</h1>

          <div className="flex flex-row gap-2">
            <Button className="rounded-full" variant='secondary'>M</Button>
            <Button className="rounded-full" variant='secondary'>A</Button>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-4">
          <h2 className="font-bold text-xl">{'Новости:'}</h2>

          {news?.map((neww, index) => (
            <p key={index}><span className="font-bold">{`${neww.title}: `}</span>{neww.text}</p>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-center mt-4">
          <Maraphon imgSource={'/image_2.png'} title="С 150м до 15км" firstGroupCount={30} secondGroupCount={30} thirdGroupCount={30} fourthGroupCount={30} />
          <Maraphon imgSource={'/image_2.png'} title="С 150м до 15км" firstGroupCount={30} secondGroupCount={30} thirdGroupCount={30} fourthGroupCount={30} />
          <Maraphon imgSource={'/image_2.png'} title="С 150м до 15км" firstGroupCount={30} secondGroupCount={30} thirdGroupCount={30} fourthGroupCount={30} />
          <Maraphon imgSource={'/image_2.png'} title="С 150м до 15км" firstGroupCount={30} secondGroupCount={30} thirdGroupCount={30} fourthGroupCount={30} />
        </div>
        
      </div>
    </div>
  );
}
