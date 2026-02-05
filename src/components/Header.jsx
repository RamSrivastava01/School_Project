import { useState } from "react";
import { NavLink } from "react-router-dom";
import favicon from '../assets/images/favicon.png'
import { useLanguage } from "../context/LanguageContext";

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const { language, toggleLanguage } = useLanguage()

   return (
      <>
         {/* Top Header Bar */}
         <header className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
               <img
                  src={favicon}
                  alt="School Logo"
                  className="hidden md:block h-10 w-auto"
               />
               {/* School Name */}
               <h1 className="text-xl md:text-2xl font-bold text-[#1e40af]">
                  Shree Pradeep Kumar H.S. School
               </h1>

               {/* Desktop Menu */}
               <nav className="hidden md:flex items-center space-x-6">
                  <NavLink end to="/" className={({ isActive }) =>
                     isActive
                        ? "text-[#1e40af] font-semibold border-b-2 border-[#1e40af]"
                        : "text-gray-700 hover:text-[#1e40af]"
                  }>
                     Home
                  </NavLink>
                  <NavLink to="/about" className={({ isActive }) =>
                     isActive
                        ? "text-[#1e40af] font-semibold border-b-2 border-[#1e40af]"
                        : "text-gray-700 hover:text-[#1e40af]"
                  }>
                     About Us
                  </NavLink>
                  <NavLink to="/academics" className={({ isActive }) =>
                     isActive
                        ? "text-[#1e40af] font-semibold border-b-2 border-[#1e40af]"
                        : "text-gray-700 hover:text-[#1e40af]"
                  }>
                     Academics
                  </NavLink>
                  <NavLink to="/admissions" className={({ isActive }) =>
                     isActive
                        ? "text-[#1e40af] font-semibold border-b-2 border-[#1e40af]"
                        : "text-gray-700 hover:text-[#1e40af]"
                  }>
                     Admissions
                  </NavLink>
                  <NavLink to="/contact" className={({ isActive }) =>
                     isActive
                        ? "text-[#1e40af] font-semibold border-b-2 border-[#1e40af]"
                        : "text-gray-700 hover:text-[#1e40af]"
                  }>
                     Contact Us
                  </NavLink>

                  <NavLink
                     to="tel:+919919029742"
                     className={({ isActive }) =>
                        isActive
                           ? "text-[#1e40af] font-semibold border-b-2 border-[#1e40af]"
                           : "text-gray-700 hover:text-[#1e40af]"
                     }
                  >
                     Call Now
                  </NavLink>
                  <button
                     onClick={toggleLanguage}
                     className="border border-[#1e40af] text-[#1e40af] px-3 py-1 rounded-md text-sm font-medium hover:bg-[#1e40af] hover:text-white transition"
                  >
                     {language === "en" ? "हिंदी" : "English"}
                  </button>

               </nav>

               {/* Mobile Hamburger */}
               <button
                  className="md:hidden text-2xl text-gray-700"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  ☰
               </button>
            </div>
         </header>

         {/* Mobile Menu */}
         {menuOpen && (
            <div className="md:hidden bg-white border-b">
               <nav className="flex flex-col px-4 py-4 space-y-4">

                  <NavLink
                     to="/"
                     end
                     onClick={() => setMenuOpen(false)}
                     className="text-gray-700"
                  >
                     Home
                  </NavLink>

                  <NavLink
                     to="/about"
                     onClick={() => setMenuOpen(false)}
                     className="text-gray-700"
                  >
                     About Us
                  </NavLink>

                  <NavLink
                     to="/academics"
                     onClick={() => setMenuOpen(false)}
                     className="text-gray-700"
                  >
                     Academics
                  </NavLink>

                  <NavLink
                     to="/admissions"
                     onClick={() => setMenuOpen(false)}
                     className="text-gray-700"
                  >
                     Admissions
                  </NavLink>

                  <NavLink
                     to="/contact"
                     onClick={() => setMenuOpen(false)}
                     className="text-gray-700"
                  >
                     Contact Us
                  </NavLink>

                  <a
                     href="tel:+919919029742"
                     onClick={() => setMenuOpen(false)}
                     className="bg-[#16a34a] text-white text-center py-2 rounded-md font-medium"
                  >
                     Call Now
                  </a>

               </nav>
            </div>
         )}

      </>
   );
}

export default Header;
