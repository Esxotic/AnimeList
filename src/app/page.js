import { getAnime } from "@/services/fetch";
import AnimeList from "./components/AnimeList";

export default async function Home() {
  const { data } = await getAnime("top/anime");
  // console.log(data);

  return (
    <div>
      <h1 className="font-bold text-2xl text-slate-100 uppercase p-4 text-center">
        Anime Populer
      </h1>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
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
