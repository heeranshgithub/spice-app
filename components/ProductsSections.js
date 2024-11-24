import React, { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const productsList = [
    {
      imageSrc: "/images/whole-spices.png",
      title: "Whole Spices",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imageSrc: "/images/spice-blends.png",
      title: "Spice Blends",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      imageSrc: "/images/powders.png",
      title: "Powders",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productsList.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsList.length - 1 : prevIndex - 1
    )
  }

  const ProductCard = ({ product }) => (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-64 w-full">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Lorem Ipsum</h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <div className="flex items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <IoIosArrowBack size={24} />
            </button>

            <div className="w-full">
              <ProductCard product={productsList[currentIndex]} />
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {productsList.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
