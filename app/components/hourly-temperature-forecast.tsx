import { CloudMoonIcon } from "lucide-react";

export default function HourlyTemperatureForecast() {
  const hourlyForecasts = [
    { hour: "22" },
    { hour: "23" },
    { hour: "00" },
    { hour: "01" },
    { hour: "02" },
  ];

  return (
    <div className="grid grid-cols-5 rounded-xl bg-black bg-opacity-15">
      {hourlyForecasts.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2 p-2.5">
          <p>{item.hour}</p>
          <CloudMoonIcon />
          <p>27 °C</p>
        </div>
      ))}
    </div>
  );
}
