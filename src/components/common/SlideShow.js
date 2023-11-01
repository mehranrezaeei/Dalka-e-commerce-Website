import React, { useEffect, useState } from "react";
import bg1 from "../../assets/images/productsslideshow/slide-bg-1.jpg";
import bg2 from "../../assets/images/productsslideshow/slide-bg-2.jpg";
import bg3 from "../../assets/images/productsslideshow/slide-bg-3.jpg";
import bg4 from "../../assets/images/productsslideshow/slide-bg-4.jpg";
const allImages = [
  { image: bg1 },
  { image: bg2 },
  { image: bg3 },
  { image: bg4 },
];
const SlideShow = () => {
  const [currentIndex, setcurrenctIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? allImages.length - 1 : currentIndex - 1;
    setcurrenctIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === allImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrenctIndex(newIndex);
  };
  const updateIndex = (index) => {
    setcurrenctIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="w-full h-full inline-flex relative group/items">
      <img
        src={allImages[currentIndex].image}
        alt=""
        className={`w-full h-full duration-500`}
      />
      {/* Arrow Left */}
      <div
        className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 hidden group-hover/items:block "
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white bg-black rounded-full cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      {/* Arrow Right */}
      <div
        className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 hidden group-hover/items:block"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-white bg-black rounded-full cursor-pointer "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      {/* Bullet Buttons */}
      <div className="absolute bottom-5 group-hover/items:flex hidden left-[50%] translate-x-[-50%] gap-2">
        {allImages.map((item, index) => {
          return (
            <button
              className={`w-2 h-2 hover:bg-Cblue rounded-full ${
                currentIndex === index ? "bg-Cblue" : "bg-white"
              }`}
              onClick={() => updateIndex(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default SlideShow;
