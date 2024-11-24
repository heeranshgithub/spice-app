import { useState } from "react"
import { FaChevronDown, FaSquare } from "react-icons/fa"

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState(null)

  const menuItems = [
    { title: "Products", items: ["Whole Spices", "Powders", "Spice Blends"] },
    { title: "Sustainability", items: ["Overview", "Updates", "Gallery"] },
    { title: "About Us", items: ["Team", "Vision", "History"] },
  ]

  return (
    <div className="flex items-center justify-between p-4 w-full gap-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center text-xl md:text-2xl font-bold text-black mr-4 md:mr-8">
        <FaSquare className="text-black mr-2" />
        AgroHaat
      </div>

      {/* Menu Section */}
      <div className="flex flex-grow justify-end gap-4 md:gap-6">
        {menuItems.map((menu, index) => (
          <div
            key={index}
            className="relative text-black cursor-pointer"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span className="px-2 md:px-3 py-1 md:py-2 flex items-center">
              {menu.title}
              <FaChevronDown className="ml-1 md:ml-2" />
            </span>
            {/* Sub-menu */}
            {activeMenu === index && (
              <div className="absolute top-full left-0 bg-gray-100 p-2 shadow-lg z-10">
                {menu.items.map((item, subIndex) => (
                  <button
                    key={subIndex}
                    className="block text-black py-1 px-3 md:py-2 md:px-4 cursor-pointer hover:bg-gray-200 text-left w-full"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Us Button */}
      <button className="bg-black text-white px-3 py-2 md:px-4 md:py-2 rounded-lg ml-4 md:mr-10">
        Contact Us
      </button>
    </div>
  )
}

// import { useState } from "react"

// export default function Menu() {
//   const [activeMenu, setActiveMenu] = useState(null)

//   const menuItems = [
//     { title: "Products", items: ["Whole Spices", "Powders", "Spice Blends"] },
//     { title: "Sustainabilty", items: ["Overview", "Updates", "Gallery"] },
//     { title: "About Us", items: ["Team", "Vision", "History"] },
//   ]

//   return (
//     <div className="flex items-center justify-between p-2 w-full gap-8">
//       {/* Logo Section */}
//       <div className="text-2xl font-bold text-black mr-52">AgroHaat</div>

//       {/* Menu Section */}
//       <div className="flex bg-neutral-800 p-2 flex-grow justify-around">
//         {menuItems.map((menu, index) => (
//           <div
//             key={index}
//             className="relative text-white cursor-pointer mx-4"
//             onMouseEnter={() => setActiveMenu(index)}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <span className="px-3 py-2">{menu.title}</span>
//             {activeMenu === index && (
//               <div className="absolute top-full left-0 bg-neutral-700 p-2 shadow-lg z-10">
//                 {menu.items.map((item, subIndex) => (
//                   <div
//                     key={subIndex}
//                     className="text-white py-2 px-4 cursor-pointer hover:bg-gray-600"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
