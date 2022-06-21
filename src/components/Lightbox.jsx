import React, { useState } from "react";
import images from "../ProductImages";
import thumbnails from "../ProductThumbnails";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Lightbox = ({ isLightboxOpen, setIsLightboxOpen }) => {
  const [selected, setSelected] = useState(0);

  const [current, setCurrent] = useState(0);
  const length = images.length;

  const handleSelect = (e) => {
    setSelected(Number(e.target.id));
    setCurrent(Number(e.target.id));
  };

  const handleLightBox = () => {
    setIsLightboxOpen(!isLightboxOpen);
  };

  const handlePrevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setSelected(current === 0 ? length - 1 : current - 1);
  };

  const handleNextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setSelected(current === length - 1 ? 0 : current + 1);
  };

  // don't allow scrolling when lightbox is open
  if (isLightboxOpen) {
    // desktop
    window.document.documentElement.style.overflowY = "hidden";
    // mobile / touch screen
    window.document.documentElement.classList.add("lock-screen");
  } else {
    // desktop
    window.document.documentElement.style.overflowY = "scroll";
    // mobile / touch screen
    window.document.documentElement.classList.remove("lock-screen");
  }

  // console.log("current", current);
  // console.log("selected", selected);

  return (
    <div
      className={
        isLightboxOpen
          ? "hidden md:flex flex-col items-center justify-center fixed left-0 top-0 w-full h-full bg-black/70"
          : "hidden"
      }
    >
      <div className="w-1/2 max-w-[600px] space-y-6">
        <div className="w-full relative">
          <div className="py-4">
            <AiOutlineClose
              onClick={handleLightBox}
              className="text-3xl ml-auto hover:text-primary cursor-pointer"
            />
          </div>
          <div
            onClick={handlePrevImage}
            className="absolute top-1/2 -translate-y-1/2 -left-8 z-10 bg-white/90 rounded-full p-3 cursor-pointer group"
          >
            <FiChevronLeft className="text-4xl group-hover:text-primary" />
          </div>
          <div
            onClick={handleNextImage}
            className="absolute top-1/2 -translate-y-1/2 -right-8 z-10 bg-white/90 rounded-full p-3 cursor-pointer group"
          >
            <FiChevronRight className="text-4xl group-hover:text-primary" />
          </div>
          <img
            className="w-full select-none pointer-events-none rounded-xl"
            src={images[selected]}
            alt=""
          />
        </div>
        <div className="w-full flex items-center justify-between gap-3">
          {thumbnails.map((thumbnail, idx) => {
            return (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden group"
              >
                <img
                  id={idx}
                  onClick={handleSelect}
                  className={
                    selected === idx
                      ? "w-full rounded-xl cursor-pointer border-2 border-primary"
                      : "w-full rounded-xl cursor-pointer border-2 border-transparent"
                  }
                  src={thumbnail}
                  alt="product thumbnail"
                />
                <div
                  className={
                    selected === idx
                      ? "absolute top-0 left-0 z-10 bg-white/70 w-full h-full pointer-events-none select-none"
                      : "absolute top-0 left-0 z-10 w-0 h-full bg-white/40 pointer-events-none select-none group-hover:w-full"
                  }
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
