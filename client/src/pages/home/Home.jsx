import Contact from "../../components/contact/Contact";
import Faq from "../../components/faq/Faq";
import Hero from "../../components/hero/Hero";
import Navigation from "../../components/navigation/Navigation";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
