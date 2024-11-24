import Image from "next/image" // Import the Image component from Next.js

export default function Banner() {
  return (
    <div className="relative w-full h-[700px] text-white flex flex-col justify-center items-start px-4 md:px-10">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/images/banner.jpg"
          alt="Banner Background"
          fill // Makes the image fill the container
          className="object-cover object-center" // Applying object-fit and object-position via Tailwind
          priority
        />
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content Section */}
      <div className="z-[9] flex flex-col items-start justify-center">
        {/* Header Text */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Saving the world and growing crops
        </h3>

        {/* Paragraph Text */}
        <p className="text-sm mb-2">
          We provide the finest spices sourced from all over the world.
        </p>
        <p className="text-sm mb-4">
          Explore our range of organic and sustainable products for a healthy
          lifestyle.
        </p>

        {/* Button */}
        <button className="bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  )
}
