"use client";

// ngakalin icon, karena icon mengalami error sehingga solusinya menambahkan url tambahan yaitu /dist/ssr
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchRef.current.value.trim() === "") {
      return false;
    } else {
      router.push(`/search/${searchRef.current.value}`);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Judul anime..."
          className="p-2 w-full rounded-md focus:outline-none focus:ring-red-700 focus:ring-2 focus:ring-offset-2 transition-all ease-in-out duration-200"
          ref={searchRef}
        />
        <button className="absolute right-0 p-2" type="submit">
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
