import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, image, id }) => {
  return (
    <div className="max-w-44 h-full bg-slate-700 p-4 rounded-md group hover:scale-105 transition-all ease-in-out md:max-w-full">
      <Link href={`/detail/${id}`}>
        <Image
          src={image}
          alt="..."
          width={300}
          height={350}
          className="rounded-md cursor-pointer group-hover:scale-105 group-hover:opacity-70 transition-all ease-in-out"
        />
      </Link>
      <h3 className="text-slate-300 font-bold text-center p-4">{title}</h3>
    </div>
  );
};

export default AnimeList;
