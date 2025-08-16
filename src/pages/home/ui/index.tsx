import Hero from "./hero";
import Listing from "./listing";
import About from "./about";
import Tips from "./tips";
import Lookbook from "./lookbook";

const Home = () => {
  return (
    <div>
      <Hero />
      <Listing />
      <About />
      <Tips />
      <Lookbook />
    </div>
  );
};

export default Home;
