import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center items-center gap-10 flex-col">
        <p className="caption text-n-4 text-center">
          Monarcha Consulting © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </Section>
  );
};

export default Footer;
