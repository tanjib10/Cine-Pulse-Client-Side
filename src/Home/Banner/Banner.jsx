import bannerImg from "./../../assets/jon-tyson-A-obUh61bKw-unsplash.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
