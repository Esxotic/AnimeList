import { getAnime } from "@/services/fetch";
import AnimeList from "./components/AnimeList";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default async function Home() {
  const { data } = await getAnime("top/anime?limit=8");
  // console.log(data);

  return (
    <div>
      <div className="flex justify-between text-slate-100 p-4">
        <h1 className="font-bold text-sm uppercase md:text-2xl">
          Anime Populer
        </h1>
        <Link
          href={"/"}
          className="text-sm content-center hover:text-slate-600 md:text-lg transition-all ease-in-out"
        >
          Lihat semua...
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 justify-items-center px-4 md:grid-cols-4 md:gap-y-8">
        {data.map((item) => {
          return (
            <div key={item.mal_id}>
              <AnimeList
                title={item.title}
                image={item.images.webp.image_url}
                id={item.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
