import { useState } from "react";
import { NavLink } from "react-router-dom";
import favicon from "../assets/images/favicon.png";
import { useLanguage } from "../context/useLanguage";

const navItems = [
   { label: "Home", to: "/" },
   { label: "About", to: "/about" },
   { label: "Academics", to: "/academics" },
   { label: "Admissions", to: "/admissions" },
   { label: "Contact", to: "/contact" },
];

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const { language, toggleLanguage } = useLanguage();

   const linkClass = ({ isActive }) =>
      `rounded-full px-4 py-2 text-sm font-semibold transition ${
         isActive
            ? "bg-[#124e66] text-white shadow-sm"
            : "text-slate-700 hover:bg-[#e8f3f1] hover:text-[#124e66]"
      }`;

   return (
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/88 backdrop-blur-xl">
         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
            <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
               <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e9f6f4] shadow-inner">
                  <img src={favicon} alt="School logo" className="h-9 w-9 object-contain" />
               </span>
               <span className="min-w-0">
                  <span className="block truncate text-base font-black tracking-normal text-[#124e66] sm:text-xl">
                     Shree Pradeep Kumar H.S. School
                  </span>
                  <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 sm:block">
                     Hardoi, Uttar Pradesh
                  </span>
               </span>
            </NavLink>

            <nav className="hidden items-center gap-1 md:flex">
               {navItems.map((item) => (
                  <NavLink key={item.to} end={item.to === "/"} to={item.to} className={linkClass}>
                     {item.label}
                  </NavLink>
               ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
               <button
                  onClick={toggleLanguage}
                  className="rounded-full border border-[#124e66]/20 px-4 py-2 text-sm font-bold text-[#124e66] transition hover:bg-[#124e66] hover:text-white"
               >
                  {language === "en" ? "हिन्दी" : "English"}
               </button>
               <a
                  href="tel:+919919029742"
                  className="rounded-full bg-[#f7c948] px-5 py-2.5 text-sm font-black text-[#172033] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#facc15]"
               >
                  Call Now
               </a>
            </div>

            <button
               aria-label="Toggle menu"
               aria-expanded={menuOpen}
               onClick={() => setMenuOpen((open) => !open)}
               className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-2xl font-black text-[#124e66] md:hidden"
            >
               {menuOpen ? "×" : "≡"}
            </button>
         </div>

         {menuOpen && (
            <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg md:hidden">
               <nav className="mx-auto grid max-w-7xl gap-2">
                  {navItems.map((item) => (
                     <NavLink
                        key={item.to}
                        end={item.to === "/"}
                        to={item.to}
                        onClick={() => setMenuOpen(false)}
                        className={linkClass}
                     >
                        {item.label}
                     </NavLink>
                  ))}
                  <div className="mt-2 grid grid-cols-2 gap-3">
                     <button
                        onClick={toggleLanguage}
                        className="rounded-full border border-[#124e66]/20 px-4 py-3 text-sm font-bold text-[#124e66]"
                     >
                        {language === "en" ? "हिन्दी" : "English"}
                     </button>
                     <a
                        href="tel:+919919029742"
                        className="rounded-full bg-[#f7c948] px-4 py-3 text-center text-sm font-black text-[#172033]"
                     >
                        Call Now
                     </a>
                  </div>
               </nav>
            </div>
         )}
      </header>
   );
}

export default Header;
