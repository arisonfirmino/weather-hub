export default function Search() {
  return (
    <form>
      <div className="rounded-xl border border-solid border-blue-500 p-2.5">
        <input
          type="text"
          placeholder="Busque por uma cidade"
          className="w-80 bg-transparent p-2.5 outline-none"
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
