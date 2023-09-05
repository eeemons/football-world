import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperStyles.css";
import { Navigation, Autoplay } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <div>
      {/* //!Desktop swiper images */}
      <div className="min-w-screen hidden lg:block">
        <Swiper
          navigation={true}
          autoplay={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/Rh6nHrx/slider-d-3.jpg"
              alt="slider-d-3"
              border="0"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/YXTJNxW/slider-d-1.jpg"
              alt="slider-d-1"
              border="0"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/9yj5Tw7/slider-d-2.jpg"
              alt="slider-d-2"
              border="0"
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* //!Mobile swiper images */}
      <div className="min-w-screen lg:hidden">
        <Swiper
          navigation={true}
          autoplay={true}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.ibb.co/Qm5B5jb/slider-1.jpg"
              alt="slider-1"
              border="0"
              className="w-full max-h-[50%]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/TMf1x5H/slider-2.jpg"
              alt="slider-2"
              border="0"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/fvzFgRP/slider-3.jpg"
              alt="slider-3"
              border="0"
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;
