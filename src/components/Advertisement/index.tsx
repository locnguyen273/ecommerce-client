import React from "react";
import "./style.scss";
import { Typography } from "antd";

const Advertisement = () => {
  return (
    <div className="advertisement">
      {/* paying offer */}
      <div className="pay-offer">
        <div className="pay-offer__top">
          <Typography.Title level={4}>ƯU ĐÃI THANH TOÁN</Typography.Title>
        </div>
        <div className="pay-offer__list">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/uu-dai-ocb-0098.jpg"
            alt=""
          />
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/Sliding-vpbank-bew0995.png"
            alt=""
          />
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sli-vib.png"
            alt=""
          />
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-uu-dai-shopeepay.png"
            alt=""
          />
        </div>
      </div>
      {/* trade special page */}
      <div className="special-page">
        <div className="special-page__top">
          <Typography.Title level={4}>
            CHUYÊN TRANG THƯƠNG HIỆU
          </Typography.Title>
        </div>
        <div className="special-page__list">
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/banner-sliding-apple-112.png"
            alt=""
          />
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/th-hieu-ss-0013.png"
            alt=""
          />
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/SIS%20asus.png"
            alt=""
          />
          <img
            src="https://cdn2.cellphones.com.vn/690x300,webp,q100/https://dashboard.cellphones.com.vn/storage/xiaomi.png"
            alt=""
          />
        </div>
      </div>
      {/* tech new */}
      <div className="tech-new">
        <div className="tech-new__top">
          <Typography.Title level={4}>TIN CÔNG NGHỆ</Typography.Title>
        </div>
        <div className="tech-new__list">
          <div className="tech-new__item">
            <img
              src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/06/cellphoneS-xa-kho-cover.jpg"
              alt=""
            />
            <Typography.Title level={4}>
              Makes Life Simple xả kho “khét” lên đến 70%, không mua hơi phí!!!
            </Typography.Title>
          </div>
          <div className="tech-new__item">
            <img
              src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/06/hinh-nen-gau-nau-thumb.jpg"
              alt=""
            />
            <Typography.Title level={4}>
              99+ hình nền Gấu Dâu siêu cute cho điện thoại, máy tính
            </Typography.Title>
          </div>
          <div className="tech-new__item">
            <img
              src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/06/suon-nuong-bang-noi-chien-khong-dau.jpg"
              alt=""
            />
            <Typography.Title level={4}>
              Cách làm sườn nướng bằng nồi chiên không dầu cực dễ dàng
            </Typography.Title>
          </div>
          <div className="tech-new__item">
            <img
              src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/06/iQOO-11s-mau-sac.jpeg"
              alt=""
            />
            <Typography.Title level={4}>
              Đây là thông tin màu sắc, RAM và bộ nhớ của iQOO 11S
            </Typography.Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
