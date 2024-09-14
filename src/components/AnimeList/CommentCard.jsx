import { prisma } from "@/services/prisma";
import React from "react";

const CommentCard = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className=" max-h-56 overflow-y-scroll">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {comments.map((item) => {
          return (
            <div className="bg-secondary p-4 rounded-sm max-h-36 overflow-y-scroll">
              <h1 className="text-textPrimary font-bold">{item.username}</h1>
              <p className="text-textSecondary text-xs md:text-sm">
                {item.comment}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentCard;
