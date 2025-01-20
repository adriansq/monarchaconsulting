import Button from "./Button";
import Section from "./Section";
import { curve, heroBackground, hero } from "../assets";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { useRef } from "react";

const Hero = ({ toggleModal }) => {
  const parallaxRef = useRef();
  return (
      <Section
        className="pt-[13rem] -mt-[5.25rem] pb-[3rem]"
        crosses
        crossesOffset="lg-translate-y-[5.25rem]"
        customPaddings
        id="home"
      >
        
        <div
          aria-hidden="true"
          className="fixed z-1 inset-x-0 blur-3xl sm:top-[-20rem]"
        >
          
          <div
            style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
            className="relative left-1/2 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
      </div>

        
        <div className="container relative" ref={parallaxRef}>
          
          <div className="z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <h1 className="h1 mb-8">
              We help you attract and convert{" "}
              <span className="inline-block relative">
                more ideal customers
                <img
                  src={curve}
                  className="absolute top-full w-full px-20 pt-2 xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                ></img>
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mt-10 mb-6 text-n-2 lg:mb-8">
              Unleash the endless potential of AI-powered marketing & outreach automation to monetize your business at scale  
            </p>

            <Button white onClick={toggleModal}>
              Get started
            </Button>
            <BackgroundCircles />
          </div>
          
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1540}
                height={1800}
                alt="hero"
              />
            </div>
            
  

          </div>
        </div>
      </Section>
  );
};

export default Hero;
