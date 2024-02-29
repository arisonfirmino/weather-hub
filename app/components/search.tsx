"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface SearchProps {
  onSearch: (city: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [city, setCity] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full xl:w-auto">
      <div className="flex w-full rounded-xl border border-solid border-blue-500 p-2.5">
        <input
          type="text"
          placeholder="Busque por uma cidade"
          value={city}
          onChange={handleInputChange}
          className="w-full bg-transparent p-2.5 outline-none xl:w-80"
        />
        <button
          type="submit"
          className="rounded-xl bg-blue-500 p-2.5 text-white active:bg-gray-400"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
