import Image from "next/image"

const Sustain = () => {
  return (
    <div className="flex justify-between items-center px-4">
      {/* Left Column with Image */}
      <div className="sm:block hidden flex-1 flex justify-center items-center">
        <Image
          src="/images/sustainability.jpg" // Replace with your image path
          alt="Spices"
          width={600} // Adjust the width as needed
          height={400} // Adjust the height as needed
          className="rounded-lg"
        />
      </div>

      {/* Right Column with Text and Buttons */}
      <div className="flex-1 pl-10 mr-14">
        <h2 className="text-2xl font-semibold text-left mb-4">
          Embracing Sustainability in Every Spice
        </h2>
        <p className="text-left text-gray-700 mb-6">
          At AgroHaat, we believe in the power of sustainable agriculture. Our
          spices are grown with care for both the earth and its people, ensuring
          the highest quality while protecting the planet for future
          generations.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white py-2 px-6 rounded-lg">
            Learn More
          </button>
          <button className="bg-white text-black border-2 border-black py-2 px-6 rounded-lg">
            <span className="hidden sm:inline">Explore Our Spices</span>
            <span className="sm:hidden">Explore</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sustain
