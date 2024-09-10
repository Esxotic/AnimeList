"use client";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
  };

  return (
    <button
      className="text-xs text-textSecondary bg-secondary py-1 px-2 rounded-md mb-2 hover:opacity-70 md:text-sm"
      onClick={handleCollection}
    >
      Add to Collection
    </button>
  );
};

export default CollectionButton;
