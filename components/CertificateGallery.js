import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Image from "next/image"

export default function CertificateGallery({ certificates }) {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = {
    mobile: 2,
    desktop: 5,
  }

  const getVisibleCertificates = (count) => {
    const visibleItems = []
    for (let i = 0; i < count; i++) {
      const index = (startIndex + i) % certificates.length
      visibleItems.push(certificates[index])
    }
    return visibleItems
  }

  const handlePrevious = () => {
    setStartIndex((prev) => {
      if (prev === 0) {
        return certificates.length - 1
      }
      return prev - 1
    })
  }

  const handleNext = () => {
    setStartIndex((prev) => {
      return (prev + 1) % certificates.length
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Certifications</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 -translate-x-4 z-10 p-2"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>

        {/* Mobile Certificates Grid (2 items) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {getVisibleCertificates(itemsPerPage.mobile).map(
              (certificate, index) => (
                <div
                  key={`mobile-${startIndex}-${index}`}
                  className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={certificate.imageSrc}
                    alt={certificate.title}
                    fill
                    sizes="(max-width: 768px) 50vw"
                    className="object-cover"
                    priority={index < 2} // Prioritize loading first 2 images
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Desktop Certificates Grid (5 items) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-5 gap-6">
            {getVisibleCertificates(itemsPerPage.desktop).map(
              (certificate, index) => (
                <div
                  key={`desktop-${startIndex}-${index}`}
                  className="aspect-[4/3] rounded-lg overflow-hidden relative border-2"
                >
                  <Image
                    src={certificate.imageSrc}
                    alt={certificate.title}
                    fill
                    sizes="(min-width: 768px) 20vw"
                    className="object-fit"
                    priority={index < 4} // Prioritize loading first 4 images
                  />
                </div>
              )
            )}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-4 translate-x-4 z-10 p-2"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
