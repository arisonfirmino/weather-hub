"use client";

import { useEffect, useState, useCallback } from "react";
import Header from "../components/header";
import CityDate from "../components/city-date";
import Search from "../components/search";
import TemperatureDisplay from "../components/temperature-display";
import { AlertCircleIcon } from "lucide-react";

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const fetchWeatherData = useCallback(
    async (city: string) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setWeatherData(data);
      setNotFound(false);
    },
    [API_KEY],
  );

  const handleSearch = async (city: string) => {
    setCityName(city);

    try {
      await fetchWeatherData(city);
    } catch (error) {
      console.error("Error fetching data:", error);
      setWeatherData(null);
      setNotFound(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let location = "Londres";

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            fetch(
              `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`,
            )
              .then((response) => response.json())
              .then((data) => {
                if (data && data[0] && data[0].name) {
                  setCityName(data[0].name);

                  fetchWeatherData(data[0].name);
                }
              })
              .catch((error) =>
                console.error("Error fetching location:", error),
              );
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setWeatherData(null);
        setNotFound(true);
      }
    };
    fetchData();
  }, [API_KEY, fetchWeatherData]);

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
