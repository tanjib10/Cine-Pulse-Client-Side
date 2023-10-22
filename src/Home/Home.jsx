// import Navbar from "../Navbar/Navbar";
import Brands from "../Brands/Brands";
import Contact from "../Contact/Contact";
import Streaming from "../Streaming/Streaming";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <Brands></Brands>
        <Streaming></Streaming>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
