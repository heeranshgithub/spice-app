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
  {
    imageSrc: "/images/certificates/certificate-8.jpg",
    title: "Certificate 5",
  },
  {
    imageSrc: "/images/certificates/client12.jpg",
    title: "Certificate 6",
  },
  {
    imageSrc: "/images/certificates/client13.jpg",
    title: "Certificate 7",
  },
]

export default certificatesListArr

// import fs from "fs-extra"

// const certificatesImagesDir = "../images/certificates"
// function getCertificateImgSrcs() {
//   try {
//     const fileNames = fs.readdirSync(certificatesImagesDir)
//     // console.log(fileNames)
//     return fileNames
//   } catch (error) {
//     console.error("Error reading directory:", error.message)
//   }
// }

// const certificatesSrcList = getCertificateImgSrcs()

// const certificatesListArr = certificatesSrcList.map((certi, index) => {
//   return {
//     imageSrc: `/images/certificates/${certi}`,
//     title: `Certificate ${index}`,
//   }
// })

// console.log(certificatesListArr)
