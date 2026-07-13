import { useLanguage } from "../context/useLanguage";

function AboutSchool() {
   const { language } = useLanguage();

   const text = {
      en: {
         eyebrow: "About the School",
         title: "Built for learning, safety, and steady progress.",
         p1: "Shree Pradeep Kumar Higher Secondary School is committed to giving students a calm, disciplined, and encouraging environment for everyday learning.",
         p2: "Experienced teachers, smart classrooms, regular monitoring, and a secure campus help children build both academic strength and good habits.",
         points: [
            "Classes from 1st to 12th",
            "Experienced and qualified faculty",
            "Safe campus with CCTV surveillance",
            "Modern teaching with smart classes",
         ],
      },
      hi: {
         eyebrow: "विद्यालय परिचय",
         title: "पढ़ाई, सुरक्षा और निरंतर प्रगति के लिए समर्पित।",
         p1: "श्री प्रदीप कुमार हायर सेकेंडरी स्कूल छात्रों को शांत, अनुशासित और प्रोत्साहन भरा वातावरण देने के लिए प्रतिबद्ध है।",
         p2: "अनुभवी शिक्षक, स्मार्ट कक्षाएं, नियमित निगरानी और सुरक्षित परिसर बच्चों को पढ़ाई के साथ अच्छे संस्कार भी देते हैं।",
         points: [
            "कक्षा 1 से 12 तक",
            "अनुभवी एवं योग्य शिक्षक",
            "CCTV निगरानी वाला सुरक्षित परिसर",
            "स्मार्ट कक्षाएं और आधुनिक शिक्षण",
         ],
      },
   };

   return (
      <section className="bg-white py-18 sm:py-24">
         <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] bg-[#124e66] p-8 text-white shadow-xl shadow-[#124e66]/15">
               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f7c948]">{text[language].eyebrow}</p>
               <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{text[language].title}</h2>
               <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Discipline", "Care", "Safety", "Growth"].map((item) => (
                     <div key={item} className="rounded-2xl bg-white/10 p-4">
                        <span className="block text-3xl font-black text-[#f7c948]">+</span>
                        <span className="mt-1 block text-sm font-bold">{item}</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex flex-col justify-center">
               <p className="text-lg leading-8 text-slate-600">{text[language].p1}</p>
               <p className="mt-4 text-lg leading-8 text-slate-600">{text[language].p2}</p>

               <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {text[language].points.map((item) => (
                     <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-[#f8fbfb] p-4 shadow-sm">
                        <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#0ead69]" />
                        <span className="font-bold text-slate-700">{item}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}

export default AboutSchool;
