import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products from", category);
    setProducts(["clothes", "household"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
