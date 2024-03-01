"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import CityDate from "../components/city-date";
import Search from "../components/search";
import TemperatureDisplay from "../components/temperature-display";
import { AlertCircleIcon } from "lucide-react";

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [cityName, setCityName] = useState("Londres");
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  const [weatherData, setWeatherData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (city: string) => {
    setCityName(city);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setWeatherData(data);
        setNotFound(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setWeatherData(null);
        setNotFound(true);
      }
    };
    fetchData();
  }, [API_URL]);

  return (
    <main className="flex min-h-screen w-full flex-col gap-10 p-5">
      <Header />

      <section className="flex w-full flex-col items-center gap-5 xl:flex-row xl:justify-between xl:gap-0">
        {notFound && (
          <p className="flex items-center gap-2 text-xl text-red-600">
            <AlertCircleIcon size={20} />
            Não Encontrado
          </p>
        )}

        {!notFound && weatherData && <CityDate weatherData={weatherData} />}
        <Search onSearch={handleSearch} />
      </section>

      <section className="flex items-center">
        <TemperatureDisplay weatherData={weatherData} cityName={cityName} />
      </section>
    </main>
  );
}
