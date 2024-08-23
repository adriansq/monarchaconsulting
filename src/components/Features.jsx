import Section from "./Section";
import Heading from "./Heading";
import { features } from "../constants";
import { check2, grid } from "../assets";
import { curve } from "../assets";
import Button from "./Button";

const Services = () => {
  return (
    <Section crosses className="overflow-hidden" id="services">
      <div className="container md:pb-10 pt-[0rem]">
        <Heading
          tag="What we can do for you"
          title="Our Services"
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
    </Section>
  );
};

export default Services;
