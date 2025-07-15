import "../scss/main.scss";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Main() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="page-sections">
        <HeroSection />
        <AboutSection />
        <ProjectsSection/>
        <ContactSection/>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Main;
