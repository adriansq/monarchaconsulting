import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";



function CTA() {
  return (
    <Section crosses>
        <div className="pb-[1rem] container relative">
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
              ></img>
            </span>
          </h1>

        </div>

        <div className="w-full flex justify-center">
            <div>
              <Button className="" href="#contact">
                Contact us
              </Button>
            </div>
          </div>


      </div>
    </Section>
  )
}

export default CTA;