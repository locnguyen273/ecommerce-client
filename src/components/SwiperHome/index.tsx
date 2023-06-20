import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.scss";
import { Navigation } from "swiper";
import AsusOne from "../../assets/images/asus1.jpg";
import AsusTwo from "../../assets/images/asus2.jpg";
import AsusThree from "../../assets/images/asus3.jpg";
import AsusFour from "../../assets/images/asus4.jpg";
import AsusFive from "../../assets/images/asus5.jpg";
import AsusSix from "../../assets/images/asus6.jpg";
import AsusSeven from "../../assets/images/asus7.jpg";
import AsusEight from "../../assets/images/asus8.jpg";

const SwiperHome = () => {
  return (
    <Swiper
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="swiper-home"
    >
      <SwiperSlide>
        <img src={AsusOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={AsusTwo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={AsusThree} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={AsusFour} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={AsusFive} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={AsusSix} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={AsusSeven} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={AsusEight} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHome;
