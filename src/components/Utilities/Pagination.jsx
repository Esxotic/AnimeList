const Pagination = ({ page, setPage, TotalPage }) => {
  const handleNextPage = () => {
    page === TotalPage ? false : setPage((prevState) => prevState + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    page === 1 ? false : setPage((prevState) => prevState - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex gap-4 my-6 justify-center items-center">
      {page === 1 ? null : (
        <button
          className="bg-primary py-2 px-3 text-textPrimary rounded-md font-semibold hover:opacity-70 transition-all"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      <p className="text-textPrimary">
        {page} of {TotalPage}
      </p>
      {page === TotalPage ? null : (
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
