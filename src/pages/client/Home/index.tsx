import React from "react";
import "./style.scss";
import SwiperHome from "../../../components/SwiperHome";
import IntroBanner from "../../../components/IntroBanner";
import { Button, Typography } from "antd";
import CardItem from "../../../components/CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Advertisement from "../../../components/Advertisement";
import AdviseContact from "../../../components/AdviseContact";

const Home = () => {
  return (
    <div className="home">
      <SwiperHome />
      <div className="home__container">
        <IntroBanner />
        <div className="new-product">
          <div className="new-product__header">
            <Typography.Title level={4}>Sản phẩm mới</Typography.Title>
            <Button className="new-product__header--view-all">
              Xem tất cả
            </Button>
          </div>
          <Swiper
            rewind={true}
            navigation={true}
            slidesPerView={5}
            spaceBetween={20}
            modules={[Navigation]}
            className="new-product__list"
            breakpoints={{
              1024: { width: 1024, slidesPerView: 4 },
              768: { width: 768, slidesPerView: 3 },
              320: { width: 240, slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mobile-outstanding">
          <div className="mobile-outstanding__header">
            <Typography.Title level={4}>Điện thoại nổi bật</Typography.Title>
            <div className="mobile-outstanding__header--group">
              <Button className="mobile-outstanding__header--view-all">
                Apple
              </Button>
              <Button className="mobile-outstanding__header--view-all">
                Samsung
              </Button>
              <Button className="mobile-outstanding__header--view-all">
                Xiaomi
              </Button>
              <Button className="mobile-outstanding__header--view-all">
                OPPO
              </Button>
              <Button className="mobile-outstanding__header--view-all">
                vivo
              </Button>
              <Button className="mobile-outstanding__header--view-all">
                realme
              </Button>
              <Button className="mobile-outstanding__header--view-all">
                Nokia
              </Button>
              <Button className="mobile-outstanding__header--view-all">
                Asus
              </Button>
              <Button className="mobile-outstanding__header--view-all">
                Xem tất cả
              </Button>
            </div>
          </div>
          <Swiper
            rewind={true}
            navigation={true}
            slidesPerView={5}
            spaceBetween={20}
            modules={[Navigation]}
            className="mobile-outstanding__list"
            breakpoints={{
              1024: { width: 1024, slidesPerView: 4 },
              768: { width: 768, slidesPerView: 3 },
              320: { width: 240, slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
            <SwiperSlide>
              <CardItem />
            </SwiperSlide>
          </Swiper>
        </div>
        <Advertisement />
      </div>
      
      <AdviseContact />
    </div>
  );
};

export default Home;
