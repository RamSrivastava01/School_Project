import { useLanguage } from "../context/LanguageContext";
import schoolImage from "../assets/images/schoolImage.jpg";

function Hero() {
   const { language } = useLanguage();

   const text = {
      en: {
         admission: "Admissions Open 2026–27",
         heading: "Quality Education for a Better Tomorrow",
         description:
            "Shree Pradeep Kumar Higher Secondary School provides a safe, disciplined, and student-friendly environment with experienced faculty and modern facilities.",
         callBtn: "Call for Admission",
         learnBtn: "Learn More",
      },
      hi: {
         admission: "प्रवेश खुले हैं 2026–27",
         heading: "बेहतर भविष्य के लिए गुणवत्तापूर्ण शिक्षा",
         description:
            "श्री प्रदीप कुमार हायर सेकेंडरी स्कूल एक सुरक्षित, अनुशासित और छात्र-अनुकूल वातावरण में गुणवत्तापूर्ण शिक्षा प्रदान करता है।",
         callBtn: "प्रवेश के लिए कॉल करें",
         learnBtn: "और जानें",
      },
   };

   return (
      <section className="bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
               <p className="text-[#16a34a] font-semibold mb-2">
                  {text[language].admission}
               </p>

               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {text[language].heading}
               </h2>

               <p className="mt-4 text-gray-600 text-lg">
                  {text[language].description}
               </p>

               <div className="mt-6 flex gap-4">
                  <a
                     href="tel:+919919029742"
                     className="bg-[#16a34a] hover:bg-[#15803d] text-white px-6 py-3 rounded-md font-medium transition"
                  >
                     {text[language].callBtn}
                  </a>

                  <a
                     href="/admissions"
                     className="border border-[#1e40af] text-[#1e40af] px-6 py-3 rounded-md font-medium hover:bg-[#1e40af] hover:text-white transition"
                  >
                     {text[language].learnBtn}
                  </a>
               </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden md:block">
               <img
                  src={schoolImage}
                  alt="Shree Pradeep Kumar Higher Secondary School"
                  className="w-full h-80 object-cover rounded-lg"
               />
            </div>

         </div>
      </section>
   );
}

export default Hero;
