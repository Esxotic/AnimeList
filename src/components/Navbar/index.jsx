import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-primary md:flex md:flex-row md:justify-between">
      <Link
        href="/"
        className="text-xl md:text-2xl font-extrabold uppercase text-secondary hover:text-textPrimary transition-all ease-in-out"
      >
        AnimeMax
      </Link>
      <InputSearch />
    </div>
  );
};

export default Navbar;
