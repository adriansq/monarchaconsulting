import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import ContactModal from "./ContactForm";
import PrivacyModal from "./PrivacyModal";

function CTA({ toggleModal, isOpen, togglePrivacyModal, isPrivacyOpen }) {

  return (
    <div>
    <Section crosses id="cta" className="opacity-0">
      <div className="pb-[1rem] container relative">
        <BackgroundCircles />
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[2rem] md:mb-8 lg:mb-[3rem]">
          <h1 className="h1 mb-6">
            Are you ready to take your brand to the{" "}
            <span className="inline-block relative">
              next level?
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <Button onClick={toggleModal}>Contact us</Button>
        </div>
      </div>
    </Section>
     <ContactModal isOpen={isOpen} toggleModal={toggleModal} togglePrivacyModal={togglePrivacyModal} />
     <PrivacyModal isPrivacyOpen={isPrivacyOpen} togglePrivacyModal={togglePrivacyModal} />
    </div>
  );
}

export default CTA;
