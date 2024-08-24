import { getAnime } from "@/services/fetch";
import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";

export default async function Page() {
  const { data } = await getAnime("top/anime?limit=12");

  return (
    <section id="populer">
      <HeaderAnimeList
        title={"anime populer"}
        linkHref={"/"}
        linkText={"Lihat semua"}
      />
      <AnimeList api={data} />
    </section>
  );
}
