import { useLanguage } from "../context/LanguageContext";

function Contact() {
   const { language } = useLanguage();

   const text = {
      en: {
         title: "Contact Us",
         address: "Saray raghav, Bharkhani, Hardoi",
         hours: "Monday – Saturday, 9:00 AM – 3:00 PM",
      },
      hi: {
         title: "संपर्क करें",
         address: "सराय राघव, भरखानी, हरदोई",
         hours: "सोमवार – शनिवार, सुबह 9 से दोपहर 3 बजे तक",
      },
   };

   return (
      <section className="bg-white">
         <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold">{text[language].title}</h2>

            <p className="mt-4 text-gray-600">{text[language].address}</p>
            <p className="mt-2 text-gray-600">{text[language].hours}</p>

            <a
               href="tel:+919919029742"
               className="inline-block mt-6 bg-[#16a34a] text-white px-6 py-3 rounded-md"
            >
               Call Now
            </a>
         </div>
      </section>
   );
}

export default Contact;
