import CityDateTime from "../components/city-date-time";
import Header from "../components/header";
import Search from "../components/search";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 p-5">
      <Header />

      <section className="flex items-center justify-between">
        <CityDateTime />
        <Search />
      </section>
    </main>
  );
}
