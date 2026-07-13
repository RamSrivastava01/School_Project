import { Link } from "react-router-dom";

function Footer() {
   return (
      <footer className="bg-[#172033] text-white">
         <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
               <h3 className="text-2xl font-black">Shree Pradeep Kumar H.S. School</h3>
               <p className="mt-4 max-w-sm leading-7 text-white/70">
                  Quality education in a safe, disciplined, and student-friendly environment.
               </p>
            </div>

            <div>
               <h4 className="text-sm font-black uppercase tracking-[0.18em] text-[#f7c948]">Quick Links</h4>
               <nav className="mt-4 grid gap-2 text-white/72">
                  <Link to="/" className="hover:text-white">Home</Link>
                  <Link to="/about" className="hover:text-white">About</Link>
                  <Link to="/academics" className="hover:text-white">Academics</Link>
                  <Link to="/admissions" className="hover:text-white">Admissions</Link>
                  <Link to="/contact" className="hover:text-white">Contact</Link>
               </nav>
            </div>

            <div>
               <h4 className="text-sm font-black uppercase tracking-[0.18em] text-[#f7c948]">Contact</h4>
               <div className="mt-4 grid gap-2 text-white/72">
                  <p>Sarai Ragho, Bharkhani, Hardoi, 241123</p>
                  <a href="tel:+919919029742" className="hover:text-white">+91 99190 29742</a>
                  <p>Office Time: 9:00 AM to 3:00 PM</p>
               </div>
            </div>
         </div>

         <div className="border-t border-white/10">
            <p className="px-4 py-4 text-center text-sm text-white/60">
               © {new Date().getFullYear()} Shree Pradeep Kumar H.S. School. All rights reserved.
            </p>
         </div>
      </footer>
   );
}

export default Footer;
