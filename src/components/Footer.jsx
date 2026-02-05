function Footer() {
   return (
      <footer className="bg-[#1e40af] text-white">
         <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">

            {/* School Info */}
            <div>
               <h3 className="text-xl font-bold">
                  Shree Pradeep Kumar H.S. School
               </h3>
               <p className="mt-3 text-sm text-gray-200">
                  Providing quality education in a safe, disciplined, and
                  student-friendly environment.
               </p>
            </div>

            {/* Quick Links */}
            <div>
               <h4 className="text-lg font-semibold mb-3">
                  Quick Links
               </h4>
               <ul className="space-y-2 text-sm text-gray-200">
                  <li><a href="/" className="hover:underline">Home</a></li>
                  <li><a href="/about" className="hover:underline">About Us</a></li>
                  <li><a href="/admissions" className="hover:underline">Admissions</a></li>
                  <li><a href="/academics" className="hover:underline">Academics</a></li>
                  <li><a href="/contact" className="hover:underline">Contact</a></li>
               </ul>
            </div>

            {/* Contact Info */}
            <div>
               <h4 className="text-lg font-semibold mb-3">
                  Contact Us
               </h4>
               <p className="text-sm text-gray-200">
                  📍 Sarai Ragho, bharkhani, hardoi, 241123
               </p>
               <p className="mt-2 text-sm text-gray-200">
                  📞 +91 99190 29742
               </p>
               <p className="mt-2 text-sm text-gray-200">
                  ⏰ Office Time: 9:00 AM – 3:00 PM
               </p>
            </div>

         </div>

         {/* Bottom Bar */}
         <div className="border-t border-blue-300">
            <p className="text-center text-sm text-gray-200 py-4">
               © {new Date().getFullYear()} Shree Pradeep Kumar H.S. School. All rights reserved.
            </p>
         </div>
      </footer>
   );
}

export default Footer;
