import Hero from "./hero";
import Listing from "./listing";
import About from "./about";
import Tips from "./tips";
import Lookbook from "./lookbook";
import OurServices from "./ourServices";

const Home = () => {
  return (
    <div>
      <Hero />
      <Listing />
      <About />
      <Tips />
      <Lookbook />
      <OurServices />
    </div>
  );
};

export default Home;
