import Section from "./Section";
import Heading from "./Heading";
import { features } from "../constants";
import { check2, grid } from "../assets";
import TagLine from "./TagLine";
import { curve } from "../assets";
import Button from "./Button";

const Services = () => {
  return (
    <Section className="overflow-hidden" id="services">
      <div className="container md:pb-10 pt-[2rem]">
        <Heading
          tag="Ready to get started"
          title="What we can do for you"
        ></Heading>

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {features.map((item) => (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    src={grid}
                    className="w-full"
                    width={550}
                    height={550}
                    alt="grid"
                  />
                </div>

                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        src={check2}
                        className="mr-2.5"
                        alt={status}
                        width={16}
                        height={16}
                      />
                      <div className="tagline">{item.status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      src={item.imageUrl}
                      className="w-full"
                      width={630}
                      height={420}
                      alt={item.title}
                    />
                  </div>

                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-[5rem] container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
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
  );
};

export default Services;
