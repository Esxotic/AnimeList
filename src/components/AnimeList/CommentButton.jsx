"use client";

import { useState } from "react";

const CommentButton = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleComment = async (e) => {
    e.preventDefault();

    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
    };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const items = await response.json();

    if (items.isCreated) {
      setComment("");
      return setIsCreated(true);
    }
  };

  return (
    <>
      {isCreated && (
        <p className="text-textPrimary text-xs">Komentar berhasil diposting!</p>
      )}
      <textarea
        name="comment"
        id="comment"
        className="w-full h-16 rounded-sm text-primary text-xs p-2 focus:outline-none focus:ring-2 focus:ring-secondary transition-all md:h-32 md:text-sm"
        placeholder="Tulis komentar anda di sini!"
        onChange={handleInput}
        value={comment}
      />
      <button
        className="bg-secondary text-textSecondary py-2 px-4 rounded-md w-fit text-xs font-semibold hover:opacity-70 transition-all ease-in-out md:text-sm"
        onClick={handleComment}
      >
        Posting
      </button>
    </>
  );
};

export default CommentButton;
