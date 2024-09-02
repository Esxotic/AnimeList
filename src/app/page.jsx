import { getAnime, getNestedAnime } from "@/services/fetch";
import AnimeList from "@/components/AnimeList";
import HeaderAnimeList from "@/components/AnimeList/Header";

export default async function Page() {
  const { data } = await getAnime("top/anime?limit=12");
  const recomendedAnime = await getNestedAnime("recommendations/anime");

  let InitialIndex = Math.floor(Math.random() * recomendedAnime.length) - 12;
  let firstIndex;

  InitialIndex < 12 ? (firstIndex = 0) : (firstIndex = InitialIndex);

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
        <AnimeList api={recomendedAnime.slice(firstIndex, firstIndex + 12)} />
      </section>
    </>
  );
}
