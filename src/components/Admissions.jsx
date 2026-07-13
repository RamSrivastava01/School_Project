import { useLanguage } from "../context/useLanguage";
import { getAdmissionSessionYear } from "../utils/admissionSession";

function Admissions() {
   const { language } = useLanguage();
   const sessionYear = getAdmissionSessionYear();

   const text = {
      en: {
         title: `Admissions Open for ${sessionYear}`,
         subtitle: "Speak with the school office for class availability, documents, fee details, and transport routes.",
         points: ["Classes 1st to 12th", "Limited seats available", "RTE admission as per norms", "Office timing: 9:00 AM to 3:00 PM"],
         btn: "Call +91 99190 29742",
      },
      hi: {
         title: `सत्र ${sessionYear} के लिए प्रवेश खुले हैं`,
         subtitle: "कक्षा उपलब्धता, दस्तावेज, शुल्क विवरण और परिवहन रूट की जानकारी के लिए कार्यालय से संपर्क करें।",
         points: ["कक्षा 1 से 12 तक", "सीमित सीटें उपलब्ध", "RTE प्रवेश नियमों के अनुसार", "कार्यालय समय: सुबह 9 बजे से दोपहर 3 बजे तक"],
         btn: "कॉल करें +91 99190 29742",
      },
   };

   return (
      <section className="bg-[#124e66] py-18 text-white sm:py-24">
         <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f7c948]">Admissions</p>
               <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{text[language].title}</h2>
               <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">{text[language].subtitle}</p>
               <a
                  href="tel:+919919029742"
                  className="mt-8 inline-flex rounded-full bg-[#f7c948] px-7 py-4 font-black text-[#172033] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#facc15]"
               >
                  {text[language].btn}
               </a>
            </div>

            <div className="rounded-[2rem] bg-white p-6 text-[#172033] shadow-2xl shadow-black/10">
               <h3 className="text-xl font-black">Admission Highlights</h3>
               <ul className="mt-5 grid gap-3">
                  {text[language].points.map((point) => (
                     <li key={point} className="flex gap-3 rounded-2xl bg-[#f4f8f8] p-4">
                        <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#0ead69]" />
                        <span className="font-bold text-slate-700">{point}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}

export default Admissions;
