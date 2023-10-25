import slider1 from "../assets/madrid-spain-february-8-2023-diverse-movies-advertisements-in-the-entrance-to-a-movie-theater-in-la-gran-via-avenue-2R0NG2G.jpg";
import slider2 from "../assets/159244.jpg";
import slider3 from "../assets/download.jpeg";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/bundle";
import { Link, useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const brands = useLoaderData();
  // const { _id } = useParams();
  return (
    <div>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        fadeEffect={{ clickable: true }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <Swiper>
          <SwiperSlide>
            <div className="h-[95vh] w-full">
              <img className="h-full w-full" src={slider1} alt="" />
              <div className="backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[95vh] w-full">
              <img className="h-full w-full" src={slider2} alt="" />
              <div className="backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" h-[95vh] w-full">
              <img className="h-full w-full" src={slider3} alt="" />
              <div className="backdrop-blur-sm left-0 right-0 bottom-0 flex flex-col justify-center items-center"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Swiper>
      <div className="my-24 max-w-6xl mx-auto">
        <h3 className="text-3xl text-center font-bold mb-16 text-[#005B41]">
          {brands.brandTitle} Collections
        </h3>
        <div className="grid grid-cols-1 ml-6 lg:ml-0 lg:grid-cols-2 gap-10">
          {brands.map((brand) => (
            <div key={brand.id}>
              <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full object-cover"
                    src={brand.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {brand.name}
                    <span className="font-normal text-xs">
                      {brand.brandTitle}
                    </span>
                  </h2>
                  <div className="flex justify-center items-center">
                    <p>
                      Type : <span className="font-bold">{brand.type}</span>{" "}
                    </p>
                    <p>
                      Rating : <span className="font-bold">{brand.rating}</span>{" "}
                    </p>
                  </div>
                  <p>
                    Price :{" "}
                    <span className="font-extrabold">{brand.price}</span>
                  </p>
                  <p className="text-emerald-600">{brand.details}</p>
                  <div className="card-actions justify-end">
                    <div className="bg-cyan-400 text-white rounded-lg">
                      <Link to={`/productDetails/${brand._id}`}>
                        <button className="btn btn-ghost">Details</button>
                      </Link>
                    </div>
                    <div className="bg-amber-500">
                      <Link to={`updateProduct/${brand._id}`}>
                        <button className="btn btn-ghost">Update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
