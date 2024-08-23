import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath"


const Benefits = () => {
  return (
    <Section crosses id="expertise">
      <div className="container relative z-2 pt-[0rem]">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          tag="WHY MONARCHA"
          title="Full-Service Capabilities"
          text="We offer a holistic approach to elevate your brand, drive meaningful connections and turn visitors into loyal customers."
        />

        <div className="flex flex-wrap gap-10 mb-2 justify-center">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] border border-n-1/10 rounded-3xl"
              key={item.id}
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,  
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto justify-center">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{
                  clipPath: "url(#benefits)"
                }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
