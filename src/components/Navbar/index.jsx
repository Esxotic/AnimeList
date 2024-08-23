import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-primary md:flex md:flex-row md:justify-between">
      <Link
        href="/"
        className="text-xl md:text-2xl font-extrabold uppercase text-secondary hover:text-textPrimary transition-all ease-in-out"
      >
        AnimeMax
      </Link>
      <input
        type="search"
        placeholder="Judul anime..."
        className="p-2 md:px-2 md:py-0 rounded-md focus:outline-none focus:ring-red-700 focus:ring-2 focus:ring-offset-2 transition-all ease-in-out duration-200"
      />
    </div>
  );
};

export default Navbar;
