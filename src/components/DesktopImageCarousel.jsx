import React, { useState } from "react";
import images from "../ProductImages";
import thumbnails from "../ProductThumbnails";

const DesktopImageCarousel = ({ handleLightbox }) => {
  const [selected, setSelected] = useState("0");

  const handleSelect = (e) => {
    setSelected(e.target.id);
  };

  return (
    <div className="hidden md:block md:w-1/2 max-w-[600px] min-w-[450px] mx-auto lg:mx-0 p-20 space-y-6">
      <div className="w-full rounded-xl overflow-hidden">
        <img
          onClick={handleLightbox}
          className="w-full cursor-pointer"
          src={images[selected]}
          alt=""
        />
      </div>
      <div className="w-full flex items-center justify-between gap-3">
        {thumbnails.map((thumbnail, idx) => {
          return (
            <img
              key={idx}
              id={idx}
              onClick={handleSelect}
              className={
                selected === String(idx)
                  ? "w-full rounded-xl cursor-pointer opacity-40 border-2 border-primary"
                  : "w-full rounded-xl cursor-pointer hover:opacity-60 border-2 border-transparent"
              }
              src={thumbnail}
              alt="product thumbnail"
            />
          );
        })}
      </div>
    </div>
  );
};

export default DesktopImageCarousel;
