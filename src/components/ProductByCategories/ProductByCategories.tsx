import React from 'react'

const ProductByCategories = () => {
    const categories = ["accessoires"]
  return (
    <div>
        {categories.map(categorie=><CategorieCarousel/>)}
    </div>
  )
}

export default ProductByCategories