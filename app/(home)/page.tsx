import CityDateTime from "../components/city-date-time";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 p-5">
      <Header />

      <section>
        <CityDateTime />
      </section>
    </main>
  );
}
