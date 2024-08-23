import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { monarchaServices } from "../constants";
import Generating from "./Generating";
import { Gradient } from "./design/Hero";

const Features = () => {
  return (
    <Section crosses>
      <div className="container">
        <Heading
          tag="Why Monarcha"
          title="AI-Powered Lead Gen and Sales"
          text="Unlocking the transformative potential of AI to deliver marketing solutions that drive growth"
        />

        <div className="relative">
          <div className="relative z-1 gap-10 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="hidden md:block w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                src={service1}
                width={800}
                height={730}
                alt="Smartest AI"
              />
            </div>

            <div className="sm:mr-auto z-1 max-w-[17rem] ml-auto mr-20">
              <h4 className="h4 mb-4">Smartest Combination</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Discover the power of AI + human expertise for the best results.
              </p>
              <ul className="body-2">
                {monarchaServices.map((item, index) => (
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                    key={index}
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="md:p-0 relative border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="inset-0">
                <img
                  className="pr-32 pl-32 pt-10 w-full h-full lg:pr-32 lg:pl-32 lg:pt-14 lg:pb-8 md:pr-56 md:pl-56 md:pt-28 md:pb-14"
                  src={service2}
                  width={240}
                  height={250}
                  alt="Robot"
                />

                <div className="text-center inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">Results-driven experts</h4>
                  <p className="body-2 mb-[1rem] text-n-3">
                    Combining creativity, data insights and expertise to develop
                    strategies that deliver measurable results
                  </p>
                </div>
              </div>
            </div>

            <div className="md:p-0 relative border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="inset-0">
                <img
                  className="pr-32 pl-32 pt-10  w-full h-full lg:pr-32 lg:pl-32 lg:pt-14 lg:pb-8 md:pr-56 md:pl-56 md:pt-28 md:pb-14"
                  src={service3}
                  width={240}
                  height={250}
                  alt="Robot"
                />

                <div className="text-center inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="h4 mb-4">Collaborative Approach</h4>
                  <p className="body-2 mb-[1rem] text-n-3">
                  Immersing ourselves in your brand and industry to create campaigns that resonate with your audience
                  </p>
                </div>
              </div>
            </div>

          </div>

          <Gradient />
        </div>
      </div>
      
    </Section>
  );
};

export default Features;
