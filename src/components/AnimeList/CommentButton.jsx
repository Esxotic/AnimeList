"use client";

import { useState } from "react";
import VideoPlayer from "../Utilities/VIdeoPlayer";
import { useRouter } from "next/navigation";
import InputRating from "./InputRating";

const CommentButton = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
  video_id,
}) => {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [rating, setRating] = useState(0);

  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleComment = async (e) => {
    e.preventDefault();

    if (comment.trim() === "" || comment.length < 3) {
      alert("Komentar minimal 3 huruf dan tidak boleh kosong!");
      return false;
    }

    const data = {
      anime_mal_id,
      user_email,
      comment,
      username,
      anime_title,
      rating,
    };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const items = await response.json();

    if (items.isCreated) {
      setComment("");
      setIsCreated(true);
      router.refresh();
    }
    return;
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
        placeholder="Tulis komentar anda di sini! (min.3 karakter)"
        onChange={handleInput}
        value={comment}
      />
      <div className="flex items-center gap-2 my-2">
        <h1 className="text-textSecondary font-semibold">Rating:</h1>
        <InputRating rating={rating} setRating={setRating} />
      </div>
      <button
        className="bg-secondary text-textSecondary py-2 px-4 rounded-md w-fit text-xs font-semibold hover:opacity-70 transition-all ease-in-out md:text-sm"
        onClick={handleComment}
      >
        Posting
      </button>
      <VideoPlayer id={video_id} />
    </>
  );
};

export default CommentButton;
