import { useLanguage } from "../context/LanguageContext";

function Facilities() {
   const { language } = useLanguage();

   const text = {
      en: {
         title: "Our Facilities",
         subtitle: "A safe and modern learning environment",
         items: [
            { icon: "📹", title: "CCTV Surveillance", desc: "Complete campus monitoring for safety." },
            { icon: "🖥️", title: "Smart Classes", desc: "Digital learning for better understanding." },
            { icon: "🚌", title: "Transport Facility", desc: "Safe school van service." },
            { icon: "🏫", title: "Infrastructure", desc: "Spacious classrooms and furniture." },
         ],
      },
      hi: {
         title: "हमारी सुविधाएँ",
         subtitle: "सुरक्षित और आधुनिक शिक्षण वातावरण",
         items: [
            { icon: "📹", title: "सीसीटीवी निगरानी", desc: "छात्रों की सुरक्षा हेतु निगरानी।" },
            { icon: "🖥️", title: "स्मार्ट कक्षाएं", desc: "डिजिटल माध्यम से शिक्षा।" },
            { icon: "🚌", title: "परिवहन सुविधा", desc: "सुरक्षित स्कूल वाहन सेवा।" },
            { icon: "🏫", title: "भवन एवं कक्षाएं", desc: "हवादार एवं सुसज्जित कक्षाएं।" },
         ],
      },
   };

   return (
      <section className="bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold">{text[language].title}</h2>
               <p className="mt-2 text-gray-600">{text[language].subtitle}</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
               {text[language].items.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg text-center">
                     <div className="text-4xl mb-3">{item.icon}</div>
                     <h3 className="font-semibold">{item.title}</h3>
                     <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Facilities;
