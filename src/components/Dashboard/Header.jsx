"use client";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center p-4 text-textSecondary capitalize md:px-6 md:text-lg">
      <button
        className="font-semibold bg-transparent p-2 rounded-full hover:bg-primary transition-all"
        onClick={() => router.back()}
      >
        <ArrowLeft size={20} />
      </button>
      <h1 className="font-semibold">{title}</h1>
    </div>
  );
};

export default Header;
