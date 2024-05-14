"use client";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductSlider from "./components/ProductSlider";
import Video from "./components/Video";

export default function Home() {
  return (
    <section className="w-full">
      <div className="md:max-w-7xl md:mx-auto">
        <Hero />
        <Products />
        <ProductSlider />
        <Video />
      </div>
    </section>
  );
}
