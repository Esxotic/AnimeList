import { usePaginationStore } from "@/services/store";
import { useRouter } from "next/navigation";

const Pagination = () => {
  let { Page, setPage, TotalPage } = usePaginationStore();
  const router = useRouter();

  const handleNextPage = () => {
    Page === TotalPage ? false : setPage(Page + 1);
    router.push(`?page=${Page + 1}`, undefined, { shallow: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    Page === 1 ? false : setPage(Page - 1);
    router.push(`?page=${Page - 1}`, undefined, { shallow: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex gap-4 my-6 justify-center items-center">
      {Page === 1 || Page < 1 ? null : (
        <button
          className="bg-primary py-2 px-3 text-textPrimary rounded-md font-semibold hover:opacity-70 transition-all"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      <p className="text-textPrimary">
        {Page} of {TotalPage}
      </p>
      {Page === TotalPage || Page >= TotalPage ? null : (
        <button
          className="bg-primary py-2 px-3 text-textPrimary rounded-md font-semibold hover:opacity-70 transition-all"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default Pagination;
