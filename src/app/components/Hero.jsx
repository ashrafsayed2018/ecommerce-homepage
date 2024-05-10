"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const images = [
    "/images/hero0.jpg",
    "/images/hero1.jpg",
    // Add more image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:grid grid-cols-2">
      <div className="image col-span-1 h-screen relative">
        <button className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-pink-700 text-white py-2 px-4 rounded-xl">
          مجموعة جديده
        </button>
        <Image
          src={`/images/hero${heroImageIndex}.jpg`}
          alt=""
          width={500}
          height={500}
          priority={true}
          className="w-full h-[90%]"
        />
      </div>
      {/* info card */}
      <div className="info hidden md:flex flex-col p-8 justify-evenly">
        <div className="about">
          <h1 className="text-2xl text-gray-700 font-bold mb-8">
            متجر تهاني السعيدي
          </h1>
          <p className="text-gray-700 text-lg">
            تصاميم تهاني السعيد بالحلة الجديده
          </p>
          <p className="text-gray-700 text-lg">
            تطورنا معاكم وكبرنا والقادم احلى واجمل{" "}
          </p>
        </div>
        <div className="contact flex gap-4 items-center">
          <Link
            href="tel:"
            className="w-full  btn-primary flex items-center justify-around "
          >
            <FontAwesomeIcon icon={faPhone} />
            <span> اتصل بنا</span>
          </Link>

          <Link
            href="https://wa.me/96565594848"
            className="w-full  btn-secondary flex items-center justify-around"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span> واتساب</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
