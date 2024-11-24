import Menu from "../components/Menu"
import MobileMenu from "../components/MobileMenu"
import Banner from "../components/Banner"
import DesktopProductsSection from "../components/DesktopProductsSection"
import MobileProductsSection from "../components/MobileProductsSection"
import Sustain from "../components/Sustain"
import MetricsBanner from "../components/MetricsBanner"
import certificatesListArr from "../public/assets/certificatesList.mjs"
import achievementsListArr from "../public/assets/achievementsList.mjs"
import CertificateGallery from "../components/CertificateGallery"
import AchievementsGallery from "../components/AchievementsGallery"
import ProductsSection from "../components/ProductsSections"

export default function Home() {
  return (
    <div className="relative">
      {/* Desktop Menu (fixed at the top) */}
      <div
        className="hidden sm:block 
        fixed top-0 left-0
        w-full z-10 bg-white shadow-md border-b border-gray-200"
      >
        <Menu />
      </div>
      {/* Mobile Menu (fixed at the top) */}
      <div
        className="block sm:hidden 
        fixed top-0 left-0
        w-full z-10 bg-white shadow-md border-b border-gray-200"
      >
        <MobileMenu />
      </div>
      {/* Adjust this margin based on menu height */}
      <div className="border-b border-gray-200">
        <Banner />
      </div>
      {/* Desktop Cards Section */}
      {/* <div className="hidden sm:block">
        <DesktopProductsSection />
      </div> */}
      {/* Mobile Cards Section */}
      {/* <div className="block sm:hidden pb-6">
        <MobileProductsSection />
      </div> */}
      <div>
        <ProductsSection />
      </div>
      {/* Sustain Section */}
      <div className="border-t border-gray-200 md:mt-[100px] md:pt-24 md:px-12 md:pb-24 pt-6 mt-[20px] pb-10">
        <Sustain />
      </div>
      <div>
        <MetricsBanner />
      </div>
      <div>
        <CertificateGallery certificates={certificatesListArr} />
      </div>

      <div>
        <AchievementsGallery achievements={achievementsListArr} />
      </div>
    </div>
  )
}
