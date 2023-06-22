import React from "react";
import { Typography, Input, Button } from "antd";
import "./style.scss";

const { TextArea } = Input;

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__left">
        <Typography.Title level={4}>
          NƠI GIẢI ĐÁP TOÀN BỘ MỌI THẮC MẮC CỦA BẠN?
        </Typography.Title>
        <p>
          Hotline: <span>19001000 | 0987654321</span>
        </p>
        <p>
          Email: <span>info@makeslifesimple.com</span>
        </p>
        <p>LIÊN HỆ VỚI CHÚNG TÔI</p>
        <div className="about-us__left__form">
          <div className="about-us__left__row">
            <Input className="about-us__left--item" placeholder="Họ và tên" />
            <Input className="about-us__left--item" placeholder="Email" />
          </div>
          <Input className="about-us__left--item" placeholder="Số điện thoại" />
          <TextArea className="about-us__left--area" placeholder="Nội dung" rows={4} />
          <Button className="about-us__left--send-info">Gửi thông tin</Button>
        </div>
      </div>
      <div className="about-us__right"></div>
      AboutUs
    </div>
  );
};

export default AboutUs;
