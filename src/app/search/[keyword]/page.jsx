import { getAnime } from "@/services/fetch";
import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = params;
  const { data } = await getAnime(`anime?q=${keyword}`);

  return (
    <section id="search">
      <HeaderAnimeList
        title={`Hasil pencarian : ${decodeURIComponent(keyword)}`}
      />
      <AnimeList api={data} />
    </section>
  );
}
