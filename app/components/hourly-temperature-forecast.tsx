"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HourlyForecast {
  hour: number;
  temperature: number;
  icon: string;
}

export default function HourlyTemperatureForecast({
  cityName,
}: {
  cityName: string;
}) {
  const [hourlyForecasts, setHourlyForecasts] = useState<HourlyForecast[]>([]);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=pt&hourly=1`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.list && data.list.length > 0) {
          const hourlyData = data.list.map((item: any) => ({
            hour: new Date(item.dt * 1000).getHours(),
            temperature: item.main.temp,
            icon: item.weather[0].icon,
          }));
          setHourlyForecasts(hourlyData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [cityName]);

  return (
    <div className="flex max-w-[440px] gap-5 overflow-x-auto rounded-xl bg-black bg-opacity-15 [&::-webkit-scrollbar]:hidden">
      {hourlyForecasts.map((item, index) => (
        <div
          key={index}
          className="flex min-w-20 max-w-20 flex-col items-center p-2.5"
        >
          <p>{item.hour}:00</p>
          <Image
            src={`http://openweathermap.org/img/wn/${item.icon}.png`}
            height={30}
            width={30}
            alt="Weather Icon"
          />
          <p>
            {Math.round(item.temperature)} <span className="text-sm">°C</span>
          </p>
        </div>
      ))}
    </div>
  );
}
