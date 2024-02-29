import {
  ArrowDownIcon,
  ArrowUpIcon,
  DropletsIcon,
  MoonIcon,
  ThermometerIcon,
} from "lucide-react";
import HourlyTemperatureForecast from "./hourly-temperature-forecast";

interface TemperatureDisplayProps {
  weatherData: any;
  cityName: string;
}

export default function TemperatureDisplay({
  weatherData,
  cityName,
}: TemperatureDisplayProps) {
  return (
    <div className="flex w-full flex-col items-center gap-10 rounded-xl bg-gradient-to-t from-[#ddd] to-blue-500 p-5 text-white xl:w-auto">
      <div className="flex flex-col items-center gap-10 xl:flex-row">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-medium">
            {weatherData?.main.temp} <span className="text-xl">°C</span>
          </h2>

          <p className="flex items-center gap-2 capitalize">
            <MoonIcon size={16} />
            {weatherData?.weather[0].description}
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="flex items-center gap-2">
            <ThermometerIcon size={16} />
            Sensação Térmica de {weatherData?.main.feels_like}{" "}
            <span className="text-xs">°C</span>
          </p>

          <p className="flex items-center gap-2">
            <DropletsIcon size={16} />
            Humidade de {weatherData?.main.humidity}%
          </p>

          <div className="flex gap-5">
            <p className="flex items-center gap-2">
              <ArrowUpIcon size={16} />
              {weatherData?.main.temp_max} <span className="text-xs">°C</span>
            </p>

            <p className="flex items-center gap-2">
              <ArrowDownIcon size={16} />
              {weatherData?.main.temp_min} <span className="text-xs">°C</span>
            </p>
          </div>
        </div>
      </div>

      <HourlyTemperatureForecast cityName={cityName} />
    </div>
  );
}
