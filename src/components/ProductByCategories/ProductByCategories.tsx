import React from "react";
import CategorieCarousel from "../CategorieCarousel";

const ProductByCategories = () => {
  const categories = ["accessoires"];
  return (
    <div>
      {categories.map((categorie) => (
        <CategorieCarousel />
      ))}
    </div>
  );
};

export default ProductByCategories;
