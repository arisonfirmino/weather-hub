"use client";

import { useEffect, useState } from "react";
import Header from "../components/header";
import CityDate from "../components/city-date";
import Search from "../components/search";
import TemperatureDisplay from "../components/temperature-display";

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [cityName, setCityName] = useState("Londres");
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (city: string) => {
    setCityName(city);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data: any) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [API_URL]);

  return (
    <main className="flex flex-col gap-10 p-5">
      <Header />

      <section className="flex items-center justify-between">
        <CityDate weatherData={weatherData} />
        <Search onSearch={handleSearch} />
      </section>

      <section className="flex items-center">
        <TemperatureDisplay weatherData={weatherData} cityName={cityName} />
      </section>
    </main>
  );
}
