import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About"
import Features from "./components/Features"
import Footer from "./components/Footer"


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About />
        <Benefits />
        <Services />
        <Features />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
