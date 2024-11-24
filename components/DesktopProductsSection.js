import React from "react"
import { productsList } from "../public/assets/cardsList"
import Card from "./Card"
const DesktopProductsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:block hidden">
      <h1 className="text-black text-3xl mt-16 text-center mb-2">Products</h1>
      <p className="text-center mb-6">
        Explore a variety of aromatic and flavorful spice products sourced from
        around the world.
      </p>
      <div className="flex flex-wrap gap-12 justify-center items-center">
        {productsList.map((product) => (
          <Card
            key={product.title}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  )
}

export default DesktopProductsSection
