import { useLanguage } from "../context/useLanguage";

function Academics() {
   const { language } = useLanguage();

   const text = {
      en: {
         title: "Academics With Consistent Guidance",
         subtitle: "Students are supported through regular teaching, assessment, preparation, and individual attention.",
         items: [
            ["Strong Teaching", "Experienced faculty explain concepts clearly and patiently."],
            ["Regular Assessment", "Tests and classroom checks help track student progress."],
            ["Board Preparation", "Focused practice builds confidence for important exams."],
            ["Student Monitoring", "Teachers pay attention to each learner's performance."],
         ],
      },
      hi: {
         title: "नियमित मार्गदर्शन के साथ बेहतर पढ़ाई",
         subtitle: "छात्रों को शिक्षण, मूल्यांकन, परीक्षा तैयारी और व्यक्तिगत ध्यान के साथ सहयोग दिया जाता है।",
         items: [
            ["मजबूत शिक्षण", "अनुभवी शिक्षक विषयों को सरल और धैर्यपूर्वक समझाते हैं।"],
            ["नियमित मूल्यांकन", "टेस्ट और कक्षा जांच से छात्र की प्रगति देखी जाती है।"],
            ["बोर्ड तैयारी", "महत्वपूर्ण परीक्षाओं के लिए केंद्रित अभ्यास कराया जाता है।"],
            ["व्यक्तिगत ध्यान", "शिक्षक प्रत्येक विद्यार्थी के प्रदर्शन पर ध्यान देते हैं।"],
         ],
      },
   };

   return (
      <section className="bg-white py-18 sm:py-24">
         <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0ead69]">Academics</p>
               <h2 className="mt-3 text-3xl font-black leading-tight text-[#172033] sm:text-4xl">{text[language].title}</h2>
               <p className="mt-5 text-lg leading-8 text-slate-600">{text[language].subtitle}</p>
            </div>

            <div className="grid gap-4">
               {text[language].items.map(([title, desc], index) => (
                  <article key={title} className="grid gap-4 rounded-[1.5rem] border border-slate-100 bg-[#fbfcfd] p-5 shadow-sm sm:grid-cols-[4rem_1fr]">
                     <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#124e66] text-xl font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-[#172033]">{title}</h3>
                        <p className="mt-2 leading-7 text-slate-600">{desc}</p>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Academics;
