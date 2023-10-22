// import Navbar from "../Navbar/Navbar";
import Brands from "../Brands/Brands";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto">
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Home;
