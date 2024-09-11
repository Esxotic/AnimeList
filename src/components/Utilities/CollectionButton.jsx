"use client";

import { useState } from "react";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();

    if (collection.isCreated) {
      return setIsCreated(true);
    }
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-xs text-textSecondary py-2">
          Berhasil ditambahkan ke koleksi!
        </p>
      ) : (
        <button
          className="text-xs text-textSecondary bg-secondary py-1 px-2 rounded-md mb-2 hover:opacity-70 md:text-sm"
          onClick={handleCollection}
        >
          Tambah ke Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
