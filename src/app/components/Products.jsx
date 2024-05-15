import { ProductItems } from "@/utils";
import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { getAllAdminProducts } from "@/services/product";

export default function Products() {
  const router = useRouter();
  const { isAuthUser } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);

  async function getListOfProducts() {
    const response = await getAllAdminProducts();
    if (response.success) {
      setProducts(response.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);
  return (
    <div className="mx-auto my-16 px-8">
      {products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
}
