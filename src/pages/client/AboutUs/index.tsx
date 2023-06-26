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
        <p className="about-us__left--info">
          Hotline: <span>19001000 | 0987654321</span>
        </p>
        <p className="about-us__left--info">
          Email: <span>info@makeslifesimple.com</span>
        </p>
        <p className="about-us__left--contact">LIÊN HỆ VỚI CHÚNG TÔI</p>
        <div className="about-us__left__form">
          <div className="about-us__left__row">
            <Input className="about-us__left--item" placeholder="Họ và tên" />
            <Input className="about-us__left--item" placeholder="Email" />
          </div>
          <Input className="about-us__left--item" placeholder="Số điện thoại" />
          <TextArea
            className="about-us__left--area"
            placeholder="Nội dung"
            rows={4}
          />
          <Button className="about-us__left--send-info">Gửi thông tin</Button>
        </div>
      </div>
      <div className="about-us__right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31350.02851032237!2d106.63256314378876!3d10.830161738931437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752974893abdf5%3A0x1f1405c13499590b!2sTan%20Son%20Nhat%20Golf%20Course!5e0!3m2!1sen!2s!4v1687748325509!5m2!1sen!2s"></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
