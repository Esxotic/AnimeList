"use client";

const ReadMoreButton = ({ synopsis }) => {
  const handleReadMore = () => {
    const Text = document.getElementById("Text");
    const ReadMoreButton = document.getElementById("ReadMoreButton");

    Text.classList.toggle("truncate");
    Text.classList.contains("truncate")
      ? (ReadMoreButton.innerText = "Read More")
      : (ReadMoreButton.innerText = "Read Less");
  };

  return (
    <>
      <p className="text-textPrimary truncate md:text-wrap" id="Text">
        {synopsis}
      </p>
      <button
        className="text-textPrimary text-sm font-semibold underline underline-offset-1 md:text-lg md:hidden"
        onClick={handleReadMore}
        id="ReadMoreButton"
      >
        Read more...
      </button>
    </>
  );
};
export default ReadMoreButton;
