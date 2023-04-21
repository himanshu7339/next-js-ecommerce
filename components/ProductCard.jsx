import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Link href={"88888"} className="productCard">
      <p>{product.name}</p>
      <span>{product.price}</span>
    </Link>
  );
};

export default ProductCard;
