import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import AdmissionsPage from "./pages/AdmissionsPage"
import ContactPage from "./pages/ContactPage"
import AcademicsPage from "./pages/AcademicsPage"
import About from "./pages/About"
import Footer from './components/Footer.jsx'
import NotFound from "./pages/NotFound.jsx"
import { LanguageProvider } from "./context/LanguageContext.jsx"




function App() {


   return (
      <LanguageProvider>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/academics" element={<AcademicsPage />} />
               <Route path="/admissions" element={<AdmissionsPage />} />
               <Route path="/contact" element={<ContactPage />} />
               <Route path="*" element={<NotFound />} />

            </Routes>
            <Footer />

         </BrowserRouter>
      </LanguageProvider>
   )
}

export default App
