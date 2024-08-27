import { getAnime } from "@/services/fetch";
import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = params;
  const decodedUrl = decodeURI(keyword);
  const { data } = await getAnime(`anime?q=${decodedUrl}`);

  return (
    <section id="search">
      <HeaderAnimeList title={`Hasil pencarian : ${decodedUrl}`} />
      <AnimeList api={data} />
    </section>
  );
}
