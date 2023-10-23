import slider1 from "../assets/madrid-spain-february-8-2023-diverse-movies-advertisements-in-the-entrance-to-a-movie-theater-in-la-gran-via-avenue-2R0NG2G.jpg";
import slider2 from "../assets/159244.jpg";
import slider3 from "../assets/download.jpeg";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/bundle";
const BrandDetails = () => {
  return (
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
  );
};

export default BrandDetails;
