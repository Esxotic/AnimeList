import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  // console.log(api);
  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center px-4 md:grid-cols-6 md:gap-y-8">
      {api.map((anime) => {
        return (
          <div className="" key={anime.mal_id}>
            <div className="max-w-44 h-full bg-primary p-4 rounded-md group hover:scale-105 transition-all ease-in-out md:max-w-full">
              <Link href={`/detail/${anime.mal_id}`}>
                <Image
                  src={anime.images.webp.image_url}
                  alt="..."
                  width={180}
                  height={250}
                  priority={true}
                  className="rounded-md cursor-pointer group-hover:scale-105 group-hover:opacity-70 transition-all ease-in-out"
                />
              </Link>
              <h3 className="text-textPrimary font-bold text-center p-4">
                {anime.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
