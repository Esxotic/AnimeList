"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnime } from "@/services/fetch";
import { useEffect, useState } from "react";

const Page = () => {
  const [Page, setPage] = useState(1);
  const [TotalPage, setTotalPage] = useState(0);
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getAnime(`top/anime?page=${Page}`);
    const { data } = response;

    setData(data);
    setTotalPage(response.pagination.last_visible_page);
  };

  useEffect(() => {
    fetchData();
  }, [Page]);

  return (
    <>
      <Header title={`Anime Populer #${Page}`} />
      <AnimeList api={Data} />
      <Pagination page={Page} setPage={setPage} TotalPage={TotalPage} />
    </>
  );
};

export default Page;
