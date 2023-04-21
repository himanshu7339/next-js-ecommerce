import React, { Suspense } from "react";
import Loading from "./loading";
import { ProductsList } from "@/utils/features";
import ProductCard from "@/components/ProductCard";

const Products = async () => {
  const products = await ProductsList();
  const productsList = products.products;
  return (
    <Suspense fallback=<Loading />>
      {productsList?.map((Product) => (
        <ProductCard product={Product} key={Product._id} />
      ))}
    </Suspense>
  );
};

export default Products;
