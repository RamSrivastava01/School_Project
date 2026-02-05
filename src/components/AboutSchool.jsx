import { useLanguage } from "../context/LanguageContext";

function AboutSchool() {
   const { language } = useLanguage();

   const text = {
      en: {
         title: "About Our School",
         p1: "Shree Pradeep Kumar Higher Secondary School is committed to providing quality education in a safe, disciplined, and student-friendly environment.",
         p2: "With experienced teachers, smart classrooms, and CCTV surveillance, we ensure personal attention and overall development.",
         points: [
            "Classes from 1st to 10th / 12th",
            "Experienced & qualified faculty",
            "Safe campus with CCTV surveillance",
            "Smart classes & modern teaching",
         ],
      },
      hi: {
         title: "हमारे विद्यालय के बारे में",
         p1: "श्री प्रदीप कुमार हायर सेकेंडरी स्कूल सुरक्षित, अनुशासित और छात्र-अनुकूल वातावरण में गुणवत्तापूर्ण शिक्षा प्रदान करता है।",
         p2: "अनुभवी शिक्षक, स्मार्ट कक्षाएं और सीसीटीवी निगरानी के साथ हम प्रत्येक छात्र पर विशेष ध्यान देते हैं।",
         points: [
            "कक्षा 1 से 10 / 12 तक",
            "अनुभवी एवं योग्य शिक्षक",
            "सीसीटीवी से सुरक्षित परिसर",
            "स्मार्ट कक्षाएं एवं आधुनिक शिक्षण",
         ],
      },
   };

   return (
      <section className="bg-white">
         <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
            <div>
               <h2 className="text-3xl font-bold text-gray-900">
                  {text[language].title}
               </h2>

               <p className="mt-4 text-gray-600 text-lg">
                  {text[language].p1}
               </p>

               <p className="mt-4 text-gray-600">
                  {text[language].p2}
               </p>

               <ul className="mt-6 space-y-2 text-gray-700">
                  {text[language].points.map((item, i) => (
                     <li key={i}>• {item}</li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}

export default AboutSchool;
