"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnime } from "@/services/fetch";
import { useEffect, useState } from "react";
import { usePaginationStore } from "@/services/store";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [Data, setData] = useState([]);
  let { Page, setPage, setTotalPage } = usePaginationStore();
  const searchParams = useSearchParams();

  Page = Number(searchParams.get("page")) || 1;

  const fetchData = async () => {
    const response = await getAnime(`top/anime?page=${Page}`);
    const { data } = response;

    setData(data);
    setTotalPage(response.pagination?.last_visible_page);
  };

  useEffect(() => {
    fetchData();
    router.push(`?page=${Page}`, undefined, { shallow: true });
    setPage(Page);
  }, [Page]);

  return (
    <>
      <Header title={`Anime Populer #${Page}`} />
      <AnimeList api={Data} />
      <Pagination />
    </>
  );
};

export default Page;
