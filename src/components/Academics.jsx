import { useLanguage } from "../context/LanguageContext";

function Academics() {
   const { language } = useLanguage();

   const text = {
      en: {
         title: "Academics",
         items: [
            "Experienced faculty",
            "Regular tests & assessments",
            "Board exam preparation",
            "Individual student monitoring",
         ],
      },
      hi: {
         title: "शैक्षणिक गतिविधियाँ",
         items: [
            "अनुभवी शिक्षक",
            "नियमित परीक्षण",
            "बोर्ड परीक्षा की तैयारी",
            "व्यक्तिगत छात्र मूल्यांकन",
         ],
      },
   };

   return (
      <section className="bg-white">
         <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center">
               {text[language].title}
            </h2>

            <ul className="mt-8 max-w-xl mx-auto space-y-3 text-gray-700">
               {text[language].items.map((item, i) => (
                  <li key={i}>✔ {item}</li>
               ))}
            </ul>
         </div>
      </section>
   );
}

export default Academics;
