import Button from "./Button";
import Section from "./Section";
import { curve, heroBackground, hero } from "../assets";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef();
  return (
    <div id="home">
      <Section
        className="pt-[12rem] -mt-[5.25rem] pb-[3rem]"
        crosses
        crossesOffset="lg-translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <h1 className="h1 mb-6">
              We help you attract and convert more{" "}
              <span className="inline-block relative">
                ideal customers
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                ></img>
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the power of AI-powered marketing automation to grow and
              monetize your social media following
            </p>

            <Button href="#contact" white>
              Get started
            </Button>
          </div>

          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="bg-n-10 rounded-t-[0.9rem]" />
                <div className="aspect-[1.1] rounded-t-[0.9rem] overflow-hidden md:aspect-[1.8] lg:aspect-[1024/490]">
                  <img
                    src={hero}
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img
                            src={icon}
                            width={24}
                            height={25}
                            alt="icon"
                          ></img>
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>

                  <ScrollParallax isAbsolutelyPositioned>
                    <Notification
                      className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                      title="New Messages"
                    />
                  </ScrollParallax>
                </div>
              </div>

              <Gradient />
            </div>
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
              <img
                src={heroBackground}
                className="w-full"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>

            <BackgroundCircles />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
