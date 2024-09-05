import Link from "next/link";
import InputSearch from "./InputSearch";
import AuthButton from "../Utilities/AuthButton";
import { auth } from "@/services/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col gap-2 p-4 bg-primary md:flex md:flex-row md:justify-between md:items-center">
      <Link
        href="/"
        className="text-xl md:text-2xl font-extrabold uppercase text-secondary hover:text-textPrimary transition-all ease-in-out"
      >
        AnimeMax
      </Link>
      <InputSearch />
      <div className="flex gap-4 items-center">
        {session?.user ? (
          <>
            <Link
              href={"/user/dashboard"}
              className="text-textPrimary hover:text-textSecondary transition-all ease-in-out"
            >
              Dashboard
            </Link>
            <Image
              src={session?.user?.image}
              width={50}
              height={50}
              className="rounded-full w-10 h-10"
            ></Image>
          </>
        ) : null}
        <AuthButton />
      </div>
    </div>
  );
};

export default Navbar;
