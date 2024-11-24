import React from "react"
import { productsList } from "../public/assets/cardsList"
import Card from "./Card"
import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const MobileProductsSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  // Function to navigate to the previous card
  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? productsList.length - 1 : prevIndex - 1
    )
  }

  // Function to navigate to the next card
  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === productsList.length - 1 ? 0 : prevIndex + 1
    )
  }
  return (
    <div className="flex flex-col items-center sm:hidden mt-8 px-4">
      <h3 className="text-black text-xl">Products</h3>
      <p className="text-center mb-4">
        Explore a variety of aromatic and flavorful spice products sourced from
        around the world.
      </p>
      <div className="relative flex items-center justify-between w-full">
        <button
          className="p-3 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handlePrevious}
          aria-label="Previous Card"
        >
          <FaArrowLeft size={24} />
        </button>

        <Card
          imageSrc={productsList[currentCardIndex].imageSrc}
          title={productsList[currentCardIndex].title}
          description={productsList[currentCardIndex].description}
        />

        <button
          className="p-3 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handleNext}
          aria-label="Next Card"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default MobileProductsSection
