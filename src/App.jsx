import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import HeroSection from "./Pages/Hero/Hero";
import Services from "./Pages/Services/Services";
import SportsRehab from "./Pages/Services/SportsRehab";
import BackNeckPain from "./Pages/Services/BackNeckPain";
import PostRehab from "./Pages/Services/PostRehab";
import Workplaces from "./Pages/Services/Workplaces";
import ManualTherapy from "./Pages/Services/ManualTherapy";
import ExercisePhysiology from "./Pages/Services/ExercisePhysiology";
import WomenHealth from "./Pages/Services/WomenHealth";
import NDIS from "./Pages/Services/NDIS";
import Process from "./Pages/Process/Process";
import Testimonials from "./Pages/Testimonials/Testimonials";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Appointment from "./Pages/Appointment/Appointment";
import Mission from "./Pages/Mission/Mission";
import Footer from "./Pages/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Immediate scroll
    window.scrollTo(0, 0);
    // Fallback for some browsers or slow rendering
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Services removed from Home as per request */}
      <Process />
      <Mission />

      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/sports-rehab" element={<SportsRehab />} />
        <Route path="/services/back-neck-pain" element={<BackNeckPain />} />
        <Route path="/services/post-rehab" element={<PostRehab />} />
        <Route path="/services/workplaces" element={<Workplaces />} />
        <Route path="/services/manual-therapy" element={<ManualTherapy />} />
        <Route path="/services/exercise-physiology" element={<ExercisePhysiology />} />
        <Route path="/services/women-health" element={<WomenHealth />} />
        <Route path="/services/ndis" element={<NDIS />} />
      </Routes>
      <Footer />
    </Router>
  );
}