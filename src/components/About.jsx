import { smallSphere, stars } from "../assets";
import Section from "./Section";
import Heading from "./Heading";

const About = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2 pt-[2rem]">


        <div className="hidden relative justify-center mb-[0.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Monarcha"
          />

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              className="w-full"
              src={stars}
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
