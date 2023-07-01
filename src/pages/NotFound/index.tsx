import React from "react";
import ImgNotFound from "../../assets/images/img-not-found.png";
import { Button, Typography } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <div className="not-found__container">
        <img src={ImgNotFound} alt="" />
        <Typography.Title level={4}>Trang này không được tìm thấy !!!</Typography.Title>
        <Button onClick={() => navigate("/")}>
          Quay Về Trang Chủ
          <i className="fas fa-long-arrow-alt-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
