import { useLanguage } from "../context/useLanguage";

function Contact() {
   const { language } = useLanguage();

   const text = {
      en: {
         title: "Visit or Call the School Office",
         subtitle: "For admissions and general enquiries, contact us during office hours.",
         call: "Call Now",
         details: [
            ["Address", "Sarai Ragho, Bharkhani, Hardoi, 241123"],
            ["Phone", "+91 99190 29742"],
            ["Office Hours", "Monday to Saturday, 9:00 AM to 3:00 PM"],
         ],
      },
      hi: {
         title: "विद्यालय कार्यालय से संपर्क करें",
         subtitle: "प्रवेश और सामान्य जानकारी के लिए कार्यालय समय में संपर्क करें।",
         call: "अभी कॉल करें",
         details: [
            ["पता", "सराय राघो, भर्खनी, हरदोई, 241123"],
            ["फोन", "+91 99190 29742"],
            ["कार्यालय समय", "सोमवार से शनिवार, सुबह 9 बजे से दोपहर 3 बजे तक"],
         ],
      },
   };

   return (
      <section className="bg-[#f7fbff] py-18 sm:py-24">
         <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
               <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0ead69]">Contact</p>
               <h2 className="mt-3 text-3xl font-black leading-tight text-[#172033] sm:text-4xl">{text[language].title}</h2>
               <p className="mt-4 text-lg leading-8 text-slate-600">{text[language].subtitle}</p>
               <a
                  href="tel:+919919029742"
                  className="mt-7 inline-flex rounded-full bg-[#124e66] px-7 py-4 font-black text-white shadow-lg shadow-[#124e66]/20 transition hover:-translate-y-0.5 hover:bg-[#0f3f53]"
               >
                  {text[language].call}
               </a>
            </div>

            <div className="grid gap-4">
               {text[language].details.map(([label, value]) => (
                  <article key={label} className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm">
                     <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0ead69]">{label}</p>
                     <p className="mt-2 text-xl font-black text-[#172033]">{value}</p>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Contact;
