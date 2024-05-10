"use client";
import { useEffect, useState } from "react";

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  //make the slider move every one second using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  const images = [
    {
      id: 1,
      url: "/images/hero0.jpg",
      title: "image one",
    },
    {
      id: 2,
      url: "/images/hero1.jpg",
      title: "image two",
    },
    {
      id: 3,
      url: "/images/hero2.jpg",
      title: "image three",
    },
    {
      id: 4,
      url: "/images/1.jpg",
      title: "image four",
    },
    {
      id: 5,
      url: "/images/2.jpg",
      title: "image five",
    },
  ];

  const slideStyles = {
    backgroundImage: `url(${images[currentIndex].url})`,
  };

  return (
    <div className="px-8 mb-16 h-screen mx-auto relative">
      <div
        className="left-arraw absolute  top-1/2 left-12 translate-x-0 -translate-y-1/2 text-3xl text-blue-600 z-50 cursor-pointer font-bold"
        onClick={goToPrevious}
      >
        &larr;
      </div>
      <div
        className="right-arraw absolute top-1/2 right-12 translate-x-0 -translate-y-1/2 text-3xl text-blue-600 z-50 cursor-pointer font-bold"
        onClick={goToNext}
      >
        &rarr;
      </div>
      <div
        className={`w-full h-full object-contain bg-center bg-cover duration-500`}
        style={slideStyles}
      ></div>
    </div>
  );
}
