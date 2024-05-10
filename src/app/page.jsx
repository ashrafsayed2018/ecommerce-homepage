import FixedContact from "./components/FixedContact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductSlider from "./components/ProductSlider";
import Video from "./components/Video";

export default function Home() {
  return (
    <section className="w-full">
      <div className="md:max-w-7xl md:mx-auto">
        <Navbar />
        <Hero />
        <Products />
        <ProductSlider />
        <Video />
      </div>
      <Footer />
      <FixedContact />
    </section>
  );
}
