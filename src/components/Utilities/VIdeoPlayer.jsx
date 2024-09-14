"use client";

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = {
    height: "150",
    width: "250",
  };

  const handleClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="absolute mt-2 flex flex-col items-end bottom-10 right-5">
        <button className="text-textPrimary" onClick={handleClose}>
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={id}
          opts={options}
          onReady={(e) => e.target.pauseVideo()}
          onError={(e) => alert("video not found!")}
          onPlay={(e) => e.target.setVolume(20)}
        />
      </div>
    );
  };

  const ShowButton = () => {
    return (
      <div className="w-fit absolute bottom-4 right-5">
        <button
          className="text-xs text-textSecondary bg-secondary p-2 rounded-md font-semibold md:text-sm hover:opacity-70"
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
