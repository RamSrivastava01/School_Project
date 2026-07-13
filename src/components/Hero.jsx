import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage";
import schoolImage from "../assets/images/schoolImage.jpg";
import { getAdmissionSessionYear } from "../utils/admissionSession";

function Hero() {
   const { language } = useLanguage();
   const sessionYear = getAdmissionSessionYear();

   const text = {
      en: {
         admission: `Admissions Open ${sessionYear}`,
         heading: "A disciplined, caring school where children grow with confidence.",
         description:
            "Shree Pradeep Kumar Higher Secondary School brings strong academics, personal attention, and a safe campus together for families in Bharkhani, Hardoi.",
         callBtn: "Call for Admission",
         learnBtn: "Explore Admissions",
         stats: [
            ["1-12", "Classes"],
            ["CCTV", "Secure Campus"],
            ["Smart", "Classrooms"],
         ],
      },
      hi: {
         admission: `सत्र ${sessionYear} के लिए प्रवेश खुले हैं`,
         heading: "अनुशासन, देखभाल और आत्मविश्वास के साथ बच्चों का विकास।",
         description:
            "श्री प्रदीप कुमार हायर सेकेंडरी स्कूल भर्खनी, हरदोई में मजबूत पढ़ाई, व्यक्तिगत ध्यान और सुरक्षित परिसर उपलब्ध कराता है।",
         callBtn: "प्रवेश के लिए कॉल करें",
         learnBtn: "प्रवेश जानकारी",
         stats: [
            ["1-12", "कक्षाएं"],
            ["CCTV", "सुरक्षित परिसर"],
            ["Smart", "कक्षाएं"],
         ],
      },
   };

   return (
      <section className="relative overflow-hidden">
         <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
            <div className="relative z-10">
               <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#f7c948]/60 bg-white px-4 py-2 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0ead69]" />
                  <span className="text-sm font-black text-[#124e66]">{text[language].admission}</span>
               </div>

               <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-normal text-[#172033] sm:text-5xl lg:text-6xl">
                  {text[language].heading}
               </h1>

               <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  {text[language].description}
               </p>

               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                     href="tel:+919919029742"
                     className="rounded-full bg-[#124e66] px-7 py-4 text-center font-black text-white shadow-lg shadow-[#124e66]/20 transition hover:-translate-y-0.5 hover:bg-[#0f3f53]"
                  >
                     {text[language].callBtn}
                  </a>
                  <Link
                     to="/admissions"
                     className="rounded-full border border-[#124e66]/25 bg-white px-7 py-4 text-center font-black text-[#124e66] transition hover:-translate-y-0.5 hover:border-[#124e66] hover:bg-[#e9f6f4]"
                  >
                     {text[language].learnBtn}
                  </Link>
               </div>

               <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
                  {text[language].stats.map(([value, label]) => (
                     <div key={label} className="rounded-2xl border border-white bg-white/82 p-4 shadow-sm">
                        <dt className="text-2xl font-black text-[#124e66]">{value}</dt>
                        <dd className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{label}</dd>
                     </div>
                  ))}
               </dl>
            </div>

            <div className="relative min-h-[360px] lg:min-h-[580px]">
               <div className="absolute inset-x-4 bottom-0 top-10 rounded-[2rem] bg-[#f7c948]" />
               <img
                  src={schoolImage}
                  alt="Shree Pradeep Kumar Higher Secondary School building"
                  className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-2xl shadow-[#124e66]/20"
               />
               <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/92 p-5 shadow-xl backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0ead69]">Sarai Ragho, Bharkhani</p>
                  <p className="mt-2 text-2xl font-black text-[#172033]">Hardoi 241123</p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
