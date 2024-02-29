export default function CityDate({ weatherData }: any) {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()} de ${
    [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ][currentDate.getMonth()]
  } de ${currentDate.getFullYear()}`;

  return (
    <div className="flex cursor-default flex-col gap-1">
      <h1 className="text-3xl font-medium">
        {weatherData?.name}, {weatherData?.sys.country}
      </h1>
      <p className="tet-xl">{formattedDate}</p>
    </div>
  );
}
