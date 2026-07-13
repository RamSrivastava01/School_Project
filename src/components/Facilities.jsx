import { useLanguage } from "../context/useLanguage";

function Facilities() {
   const { language } = useLanguage();

   const text = {
      en: {
         title: "Facilities That Support Every School Day",
         subtitle: "Practical spaces and systems that help students learn safely and comfortably.",
         items: [
            { icon: "01", title: "CCTV Surveillance", desc: "Campus monitoring supports student safety during school hours." },
            { icon: "02", title: "Smart Classes", desc: "Digital teaching tools make concepts easier to understand." },
            { icon: "03", title: "Transport Facility", desc: "School van service is available for convenient travel." },
            { icon: "04", title: "Spacious Classrooms", desc: "Well-arranged rooms and furniture support focused learning." },
         ],
      },
      hi: {
         title: "हर स्कूल दिवस को बेहतर बनाने वाली सुविधाएं",
         subtitle: "सुरक्षित और आरामदायक पढ़ाई के लिए उपयोगी व्यवस्थाएं और स्थान।",
         items: [
            { icon: "01", title: "CCTV निगरानी", desc: "स्कूल समय में छात्रों की सुरक्षा के लिए परिसर की निगरानी।" },
            { icon: "02", title: "स्मार्ट कक्षाएं", desc: "डिजिटल शिक्षण से विषयों को समझना आसान होता है।" },
            { icon: "03", title: "परिवहन सुविधा", desc: "आसान आवागमन के लिए स्कूल वाहन सुविधा उपलब्ध।" },
            { icon: "04", title: "हवादार कक्षाएं", desc: "सुव्यवस्थित कक्षाएं पढ़ाई के लिए बेहतर माहौल बनाती हैं।" },
         ],
      },
   };

   return (
      <section className="bg-[#f4f8f8] py-18 sm:py-24">
         <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-3xl">
               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0ead69]">Facilities</p>
               <h2 className="mt-3 text-3xl font-black text-[#172033] sm:text-4xl">{text[language].title}</h2>
               <p className="mt-4 text-lg leading-8 text-slate-600">{text[language].subtitle}</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
               {text[language].items.map((item) => (
                  <article key={item.title} className="group rounded-[1.5rem] border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                     <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f6f4] text-lg font-black text-[#124e66] transition group-hover:bg-[#f7c948]">
                        {item.icon}
                     </div>
                     <h3 className="mt-6 text-xl font-black text-[#172033]">{item.title}</h3>
                     <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Facilities;
