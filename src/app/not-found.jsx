import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col -mt-28 md:-mt-20">
      <div className="flex justify-center items-center gap-4">
        <Image
          src={"/404.svg"}
          width={60}
          height={60}
          alt="DATA NOT FOUND!!"
          className="md:w-32 md:h-32"
        ></Image>
        <h1 className="text-sm md:text-3xl font-semibold text-primary"> | </h1>
        <h1 className="text-sm md:text-3xl font-semibold text-primary">
          Page Not Found!
        </h1>
      </div>
      <Link href={"/"} className="text-primary text-sm hover:text-white group">
        <span className="mt-2 translate-y-0 inline-block group-hover:-translate-x-2 transition-all ease-in">
          &#8592;
        </span>{" "}
        Kembali ke halaman utama
      </Link>
    </div>
  );
};

export default NotFound;
