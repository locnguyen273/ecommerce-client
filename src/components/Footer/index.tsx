import React from "react";
import "./style.scss";
import { Typography } from "antd";
import Logo from "../../assets/images/logo-client.jpg";
import LogoYoutube from "../../assets/images/cellphones-youtube.png";
import LogoFace from "../../assets/images/cellphones-facebook.png";
import LogoIG from "../../assets/images/cellphones-instagram.png";
import LogoTiktok from "../../assets/images/cellphones-tiktok.png";
import LogoZalo from "../../assets/images/cellphones-zalo.png";
import AlePay from "../../assets/images/alepay-logo.png";
import Kredivo from "../../assets/images/kredivo-logo.png";
import Moca from "../../assets/images/moca-logo.png";
import Mpos from "../../assets/images/mpos-logo.png";
import OnePay from "../../assets/images/onepay-logo.png";
import VnPay from "../../assets/images/vnpay-logo.png";
import ZaloPay from "../../assets/images/zalopay-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <img className="footer__item__logo" src={Logo} alt="logo" />
        </div>
        <div className="footer__item">
          <Typography.Title level={3}>Thông tin và chính sách</Typography.Title>
          <ul>
            <li>Mua hàng và thanh toán Online</li>
            <li>Mua hàng trả góp Online</li>
            <li>Tra thông tin đơn hàng</li>
            <li>Tra điểm Smember</li>
            <li>Xem ưu đãi Smember</li>
            <li>Tra thông tin bảo hành</li>
            <li>Tra cứu hoá đơn điện tử</li>
            <li>Thông tin hoá đơn mua hàng</li>
            <li>Trung tâm bảo hành chính hãng</li>
            <li>Quy định về việc sao lưu dữ liệu</li>
          </ul>
        </div>
        <div className="footer__item">
          <Typography.Title level={3}>
            Dịch vụ và thông tin khác
          </Typography.Title>
          <ul>
            <li>Khách hàng doanh nghiệp (B2B)</li>
            <li>Ưu đãi thanh toán</li>
            <li>Quy chế hoạt động</li>
            <li>Chính sách Bảo hành</li>
            <li>Liên hệ hợp tác kinh doanh</li>
            <li>Tuyển dụng</li>
            <li>Dịch vụ bảo hành điện thoại</li>
            <li>Dịch vụ bảo hành mở rộng</li>
          </ul>
        </div>
        <div className="footer__item">
          <Typography.Title level={3}>Kết nối với chúng tôi</Typography.Title>
          <div className="footer__item__connect">
            <img src={LogoYoutube} alt="" />
            <img src={LogoFace} alt="" />
            <img src={LogoIG} alt="" />
            <img src={LogoTiktok} alt="" />
            <img src={LogoZalo} alt="" />
          </div>
          <Typography.Title level={3}>Phương thức thanh toán</Typography.Title>
          <div className="footer__item__payment">
            <img src={AlePay} alt="" />
            <img src={Kredivo} alt="" />
            <img src={Moca} alt="" />
            <img src={Mpos} alt="" />
            <img src={OnePay} alt="" />
            <img src={VnPay} alt="" />
            <img src={ZaloPay} alt="" />
          </div>
        </div>
      </div>
      <p className="footer__bottom">Copyright © 2023 E-commerce Shopping Design By Loc Nguyen</p>
    </div>
  );
};

export default Footer;
