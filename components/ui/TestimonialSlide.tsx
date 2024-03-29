import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import HappyFaces from "./HappyFaces";
const TestimonialSlide = () => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <HappyFaces />
      </SwiperSlide>
      <SwiperSlide>
        <HappyFaces />
      </SwiperSlide>
      <SwiperSlide>
        <HappyFaces />
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default TestimonialSlide;
