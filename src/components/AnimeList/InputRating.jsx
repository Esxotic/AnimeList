"use client";

import { Star } from "@phosphor-icons/react";
import { useState } from "react";

import React from "react";

const InputRating = ({ rating, setRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <Star
            size={18}
            key={item}
            weight={hoverRating >= item || item <= rating ? "fill" : "regular"}
            color="#94a3b8"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => setHoverRating(item)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => {
              setRating(item);
            }}
          />
        );
      })}
    </>
  );
};

export default InputRating;
