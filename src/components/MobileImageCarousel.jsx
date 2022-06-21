import React, { useState } from "react";
import images from "../ProductImages";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const MobileImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const handlePrevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleNextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="flex w-full overflow-hidden md:hidden relative">
      <div
        onClick={handlePrevImage}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white/60 rounded-full p-2 cursor-pointer group"
      >
        <FiChevronLeft className="text-4xl group-hover:text-primary" />
      </div>
      <div
        onClick={handleNextImage}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white/60 rounded-full p-2 cursor-pointer group"
      >
        <FiChevronRight className="text-4xl group-hover:text-primary" />
      </div>
      {images.map((image, idx) => {
        return (
          <div key={idx}>
            {current === idx && (
              <img
                className="select-none pointer-events-none"
                src={image}
                alt="product"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MobileImageCarousel;
