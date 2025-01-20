import { useState, useEffect } from "react";
import { navigation } from "../constants";  // Ensure navigation uses correct IDs
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = ({ toggleModal }) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section dynamically

  // Toggle navigation on mobile
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const sections = ["home", "expertise", "services"];

  const checkIfSectionInView = () => {
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the viewport (considering 50% visibility)
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(sectionId); // Set the active section
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfSectionInView);

    return () => {
      window.removeEventListener("scroll", checkIfSectionInView);
    };
  }, []);
  
  return (
    <div
      className={`z-2 fixed top-0 left-0 w-full z-50
        border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#home">
          <img
            src="src/assets/logo2.png"
            width={500}
            height={40}
            alt="Monarcha"
          />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url} // Use href with corresponding section ID
                onClick={handleClick}
                className={`block relative font-code text-dash2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  activeSection === item.id
                    ? "z-2 lg:text-n-1" // Highlight active link
                    : "lg:text-n-1/50"
                } lg:heading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signin"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          Sign in
        </a>

        <Button className="hidden lg:flex" onClick={toggleModal}>
          Contact us
        </Button>

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
