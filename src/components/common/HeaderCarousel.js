import React, { useEffect, useState } from "react";
import pic1 from "../../assets/images/header-carousel-images/header-pic-1.png";
import pic2 from "../../assets/images/header-carousel-images/header-pic-2.png";
import pic3 from "../../assets/images/header-carousel-images/header-pic-3.png";
import pic4 from "../../assets/images/header-carousel-images/header-pic-4.png";
// UUid For Unique Key
import { v4 } from "uuid";

const Images = [
  { image: pic1 },
  { image: pic2 },
  { image: pic3 },
  { image: pic4 },
];
const HeaderCarousel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= Images.length - 1) {
        setcurrentIndex(0);
      } else {
        setcurrentIndex((prev) => prev + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className={`flex transition-transform duration-700 ease-in-out h-full`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Images.map((img) => {
          return (
            <div className="flex-shrink-0 flex-grow-0 basis-[100%]" key={v4()}>
              <img src={img.image} alt="" className="w-full h-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderCarousel;
