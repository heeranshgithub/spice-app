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
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full max-w-sm mx-auto">
      <div className="relative aspect-[3/4] max-h-[480px]">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20">
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-200">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Lorem Ipsum</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Mobile View */}
        <div className="md:hidden relative px-8">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <IoIosArrowBack size={24} />
          </button>

          <div className="w-full max-w-[320px] mx-auto">
            <ProductCard product={productsList[currentIndex]} />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            aria-label="Next slide"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 px-4">
          {productsList.map((product, index) => (
            <div key={index} className="max-w-[320px] mx-auto w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
