import { getAnime, getNestedAnime, reproduce } from "@/services/fetch";
import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";

export default async function Page() {
  const { data } = await getAnime("top/anime?limit=12");
  let recomendedAnime = await getNestedAnime("recommendations/anime", "entry");

  const ListRecomendedAnime = reproduce(recomendedAnime, 12);

  return (
    <>
      <section id="populer">
        <HeaderAnimeList
          title={"anime populer"}
          linkHref={"/populer"}
          linkText={"Lihat semua"}
        />
        <AnimeList api={data} />
      </section>

      <section id="recomended" className="mt-10">
        <HeaderAnimeList title={"anime rekomendasi"} />
        <AnimeList api={ListRecomendedAnime} />
      </section>
    </>
  );
}
