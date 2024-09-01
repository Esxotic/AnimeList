"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ id }) => {
  const [isOpen, setIsOpen] = useState(true);
  const options = {
    height: "150",
    width: "250",
  };

  const handleClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="mt-2 flex flex-col items-end">
        <button className="text-textPrimary" onClick={handleClose}>
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={id}
          opts={options}
          style={{ width: "250px", height: "150px" }}
          onReady={(e) => e.target.pauseVideo()}
          onError={(e) => alert("video not found!")}
        />
      </div>
    );
  };

  const ShowButton = () => {
    return (
      <div className="w-full text-end">
        <button
          className="text-xs text-textSecondary bg-secondary p-2 mt-2 rounded-md hover:opacity-70"
          onClick={handleClose}
        >
          Lihat Trailer
        </button>
      </div>
    );
  };

  return isOpen ? <Player /> : <ShowButton />;
};
export default VideoPlayer;
