import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <section id="collection">
      <Header title={"My collection"} />
      <div className="grid grid-cols-2 gap-4 justify-items-center px-4 mt-1 md:grid-cols-4">
        <Link href={"/"} className="border-2 border-primary w-fit">
          <Image
            src="https://picsum.photos/300/300"
            alt="..."
            width={300}
            height={350}
          />
          <h1 className="text-xs text-textPrimary font-bold bg-primary p-2 text-center md:text-sm">
            Judul Anime
          </h1>
        </Link>
        <Link href={"/"} className="border-2 border-primary w-fit">
          <Image
            src="https://picsum.photos/300/300"
            alt="..."
            width={300}
            height={350}
          />
          <h1 className="text-xs text-textPrimary font-bold bg-primary p-2 text-center md:text-sm">
            Judul Anime
          </h1>
        </Link>
        <Link href={"/"} className="border-2 border-primary w-fit">
          <Image
            src="https://picsum.photos/300/300"
            alt="..."
            width={300}
            height={350}
          />
          <h1 className="text-xs text-textPrimary font-bold bg-primary p-2 text-center md:text-sm">
            Judul Anime
          </h1>
        </Link>
        <Link href={"/"} className="border-2 border-primary w-fit">
          <Image
            src="https://picsum.photos/300/300"
            alt="..."
            width={300}
            height={350}
          />
          <h1 className="text-xs text-textPrimary font-bold bg-primary p-2 text-center md:text-sm">
            Judul Anime
          </h1>
        </Link>
      </div>
    </section>
  );
};

export default Page;
