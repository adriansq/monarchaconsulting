import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Features from "./components/Features";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import { useState, useEffect } from "react";
import 'animate.css';
import ContactModal from "./components/ContactForm";
import PrivacyModal from "./components/PrivacyModal";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const togglePrivacyModal = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const sections = ["benefitss", "expertise", "services", "cta"];

  const isSectionInViewport = () => {
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const topVisible = rect.top >= 0 && rect.top < windowHeight / 2;
        const bottomVisible = rect.bottom <= windowHeight && rect.bottom > windowHeight / 2;

        if (topVisible || bottomVisible) {
          // Add animation classes when the section is in the viewport
          if (!section.classList.contains("animate__animated")) {
            switch (section.id) {
              case "benefitss":
                section.classList.add("animate__animated");
                section.classList.add("animate__fadeIn");
                break;
              case "expertise":
                section.classList.add("animate__animated");
                section.classList.add("animate__fadeIn");
                break;
              case "services":
                section.classList.add("animate__animated");
                section.classList.add("animate__fadeIn");
                break;
              case "cta":
                section.classList.add("animate__animated");
                section.classList.add("animate__fadeIn");
              default:
                break;
            }
          }
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", isSectionInViewport);

    return () => {
      window.removeEventListener("scroll", isSectionInViewport);
    };
  }, []);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden animate__animated animate__fadeIn">
        <Header toggleModal={toggleModal} />
        <Hero toggleModal={toggleModal} />
        <Benefits />
        <Expertise />
        <Features />
        <CTA toggleModal={toggleModal} />
        <ContactModal isOpen={isOpen} toggleModal={toggleModal} togglePrivacyModal={togglePrivacyModal} />
        <PrivacyModal isPrivacyOpen={isPrivacyOpen} togglePrivacyModal={togglePrivacyModal} />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
