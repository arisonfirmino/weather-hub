import {
  DropletsIcon,
  MoonIcon,
  ThermometerIcon,
  WindIcon,
} from "lucide-react";
import HourlyTemperatureForecast from "./hourly-temperature-forecast";

export default function TemperatureDisplay() {
  return (
    <div className="flex flex-col gap-10 rounded-xl bg-gradient-to-t from-[#ddd] to-blue-500 p-5 text-white">
      <div className="flex items-center gap-10">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-medium">
            27 <span className="text-xl">°C</span>
          </h2>
          <p className="flex items-center gap-2">
            <MoonIcon size={16} />
            Pred. Limpo
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <p className="flex items-center gap-2">
            <ThermometerIcon size={16} />
            Sensação Térmica de 30 °C
          </p>

          <p className="flex items-center gap-2">
            <DropletsIcon size={16} />
            Humidade de 15%
          </p>

          <p className="flex items-center gap-2">
            <WindIcon size={16} />
            Ventos de 20 km/h
          </p>
        </div>
      </div>

      <HourlyTemperatureForecast />
    </div>
  );
}
