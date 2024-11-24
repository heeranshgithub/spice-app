import { useState } from "react"
import { FaBars, FaTimes, FaChevronRight, FaSquare } from "react-icons/fa"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const menuItems = [
    { name: "Home", subMenu: ["Overview", "Updates", "Gallery"] },
    { name: "About", subMenu: ["Team", "Vision", "History"] },
    { name: "Products", subMenu: ["Whole Spices", "Powders", "Spice Blends"] },
    { name: "Contact", subMenu: ["Email", "Phone", "Location"] },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleMenuClick = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null)
    } else {
      setActiveMenu(index)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-black">
        {/* Logo Section */}
        <div className="flex items-center text-xl md:text-2xl font-bold text-black mr-4 md:mr-8">
          <FaSquare className="text-black mr-2" />
          AgroHaat
        </div>
        <button
          onClick={toggleMenu}
          className="bg-none border-none text-black z-20"
        >
          {isOpen ? "" : <FaBars size={30} />}
        </button>
      </div>

      {/* Fullscreen menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="bg-white w-full h-full overflow-y-auto p-5 shadow-lg relative pt-16">
            {" "}
            {/* Added pt-16 for padding-top */}
            {/* Close button on the right */}
            <FaTimes
              size={30}
              className="absolute top-5 right-5 text-black cursor-pointer z-30"
              onClick={toggleMenu}
            />
            {menuItems.map((item, index) => (
              <div key={index} className="py-3 border-b border-neutral-950">
                <div
                  className="flex justify-between items-center cursor-pointer text-black"
                  onClick={() => handleMenuClick(index)}
                >
                  <span>{item.name}</span>
                  {item.subMenu.length > 0 && <FaChevronRight />}
                </div>

                {/* Submenu */}
                {activeMenu === index && item.subMenu.length > 0 && (
                  <div className="pl-5 mt-2 bg-gray-100">
                    {item.subMenu.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="py-2 text-black hover:bg-gray-100 hover:text-black"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
