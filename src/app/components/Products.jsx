import { ProductItems } from "@/utils";
import React from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div className="max-w-4xl mx-auto my-16 px-8">
      {ProductItems.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
