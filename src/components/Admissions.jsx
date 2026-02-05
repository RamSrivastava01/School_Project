import { useLanguage } from "../context/LanguageContext";

function Admissions() {
   const { language } = useLanguage();

   const text = {
      en: {
         title: "Admissions",
         points: [
            "Admissions Open for 2026–27",
            "Classes 1st to 10 / 12",
            "Limited seats available",
            "RTE as per norms",
         ],
         btn: "Call for Admission",
      },
      hi: {
         title: "प्रवेश सूचना",
         points: [
            "सत्र 2026–27 के लिए प्रवेश खुले हैं",
            "कक्षा 1 से 10 / 12 तक",
            "सीमित सीटें उपलब्ध",
            "आरटीई नियमों के अनुसार",
         ],
         btn: "प्रवेश हेतु कॉल करें",
      },
   };

   return (
      <section className="bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center">
               {text[language].title}
            </h2>

            <ul className="mt-6 max-w-xl mx-auto space-y-2">
               {text[language].points.map((p, i) => (
                  <li key={i}>✔ {p}</li>
               ))}
            </ul>

            <div className="text-center mt-8">
               <a
                  href="tel:+919919029742"
                  className="bg-[#16a34a] text-white px-6 py-3 rounded-md"
               >
                  {text[language].btn}
               </a>
            </div>
         </div>
      </section>
   );
}

export default Admissions;
