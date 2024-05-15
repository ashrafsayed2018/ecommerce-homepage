"use client";
import { useContext } from "react";
import CartModal from "./components/CartModal";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductSlider from "./components/ProductSlider";
import Video from "./components/Video";
import { GlobalContext } from "@/context";
import ToastNotificaton from "./components/toastNotification";

export default function Home() {
  const { showCartModal, setShowCartModal } = useContext(GlobalContext);
  return (
    <section className="w-full">
      <div className="md:max-w-7xl md:mx-auto">
        <Hero />
        <Products />
        <ProductSlider />
        <Video />
        {showCartModal && <CartModal />}
        <ToastNotificaton />
      </div>
    </section>
  );
}
