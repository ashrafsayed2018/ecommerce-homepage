import ProductDetails from "@/app/components/ProductDetails";
import { findProductByIdService } from "@/services/product";
import React from "react";

export default async function ProductPage({ params }) {
  const productId = params.productId;
  const product = await findProductByIdService(productId);
  return <ProductDetails product={product.data} />;
}
