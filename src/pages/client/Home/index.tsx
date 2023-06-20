import React from "react";
import "./style.scss";
import SwiperHome from "../../../components/SwiperHome";
import IntroBanner from "../../../components/IntroBanner";
import { Button, Typography } from "antd";
import CardItem from "../../../components/CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const Home = () => {
  return (
    <div className="home">
      <SwiperHome />
      <div className="home__container">
        <IntroBanner />
        <div className="new-product">
          <div className="new-product__header">
            <Typography.Title level={4}>Sản phẩm mới</Typography.Title>
            <Button className="new-product__header--view-all">Xem tất cả</Button>
          </div>
          <Swiper
            rewind={true}
            navigation={true}
            slidesPerView={5}
            spaceBetween={20}
            modules={[Navigation]}
            className="new-product__list"
          >
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
              <SwiperSlide><CardItem /></SwiperSlide>
          </Swiper>
        </div>
      </div>
      Home
    </div>
  );
};

export default Home;
