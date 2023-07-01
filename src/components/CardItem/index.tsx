import React from "react";
import "./style.scss";
import { Typography } from "antd";

const CardItem = () => {
  return (
    <div className="card-item">
      <div className="card-item__top">
        <img
          src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/4/14_1_9_2_9.jpg"
          alt=""
        />
      </div>
      <div className="card-item__info">
        <Typography.Title level={5}>
          iPhone 13 128GB | Chính hãng VN/A
        </Typography.Title>
        <p className="card-item__info--price">16.850.000₫</p>
        <p className="card-item__info--assign">
          Mua kèm LOA SONY SRS-XE300 giá 1.490.000đ ( Áp dụng cho đơn hàng trên 5.000.000đ)
        </p>
        <div className="card-item__info--rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <div className="card-item__info--favorite">
          <span>Yêu thích</span>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
