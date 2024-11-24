import React from "react"

const AchievementsGallery = ({ achievements }) => {
  const certificatesListArr = [
    {
      imageSrc: "/images/certificates/certificate-31.jpg",
      title: "Certificate 0",
    },
    {
      imageSrc: "/images/certificates/certificate-41.jpg",
      title: "Certificate 1",
    },
    {
      imageSrc: "/images/certificates/certificate-52.jpg",
      title: "Certificate 2",
    },
    {
      imageSrc: "/images/certificates/certificate-61.jpg",
      title: "Certificate 3",
    },
    {
      imageSrc: "/images/certificates/certificate-71.jpg",
      title: "Certificate 4",
    },
  ]

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Achievements</h1>
        <p className="text-gray-600 mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border-2 rounded-lg p-4 aspect-[4/3] flex items-center justify-center"
            >
              <img
                src={achievement.imageSrc}
                alt={achievement.title}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AchievementsGallery
