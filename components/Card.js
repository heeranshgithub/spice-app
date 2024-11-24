import Image from "next/image"

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-black">
      {/* Image Container */}
      <div className="relative w-full h-[85%]">
        <Image
          src={imageSrc}
          alt={title}
          fill // Ensures the image fills its container
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          className="cover rounded-t-lg"
        />

        {/* Title on top of the image with subtle gradient background */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-black/20 text-yellow-100 text-xl px-2 ">
          {title}
        </div>
      </div>

      {/* Footer Section with subtle background blend, reduced height */}
      <div className="flex flex-col justify-center bg-black h-[15%] px-2 ">
        {/* Paragraph text */}
        <p className="md:text-sm text-xs text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default Card
