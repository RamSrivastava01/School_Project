import Hero from "../components/Hero";
import AboutSchool from "../components/AboutSchool";
import Facilities from "../components/Facilities";
import Academics from "../components/Academics";
import Admissions from "../components/Admissions";
import Contact from "../components/Contact";

function Home() {
   return (
      <>
         <Hero />
         <AboutSchool />
         <Facilities />
         <Academics />
         <Admissions />
         <Contact />
      </>
   );
}

export default Home;
