import React from "react";
import "./style.scss";
import { Typography, Input, Button } from "antd";

const CustomerDetail = () => {
  return (
    <div className="customer-detail">
      <Typography.Title level={3}>
        Thông tin chi tiết khách hàng
      </Typography.Title>
      <div className="customer-detail__form">
        <div className="customer-detail__row">
          <div>
            <p>Họ và tên:</p>
            <Input placeholder="default size" />
          </div>
          <div>
            <p></p>
            <Input placeholder="default size" />
          </div>
        </div>
        <div className="customer-detail__row">
          <div>
            <p>Email</p>
            <Input placeholder="default size" />
          </div>
          <div>
            <p>Số điện thoại</p>
            <Input placeholder="default size" />
          </div>
        </div>
        <div className="customer-detail__row">
          <div>
            <p></p>
            <Input placeholder="default size" />
          </div>
          <div>
            <p>Ngày tạo:</p>
            <Input placeholder="default size" />
          </div>
        </div>
        <div className="customer-detail__row">
          <div>
            <p></p>
            <Input placeholder="default size" />
          </div>
          <div>
            <p>Ngày cập nhật:</p>
            <Input placeholder="default size" />
          </div>
        </div>
      </div>
      <div className="customer-detail__bottom">
        <Button>Quay lại</Button>
        <Button>Cập nhật thông tin</Button>
      </div>
    </div>
  );
};

export default CustomerDetail;
