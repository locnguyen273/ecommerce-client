import React, { useState } from "react";
import "./style.scss";
import { Typography, Input, Button, Switch, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { UserAdminUpdateType, UserType } from "../../../models/userModel";
import type { SelectProps } from "antd";
import { useNavigate } from "react-router-dom";
import { UpdateUserDetailAdminAction } from "../../../redux/reducers/customerReducer";

const CustomerDetail = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const userDetailAdmin: UserType = useSelector(
    (state: RootState) => state.CustomerReducer.userDetailInfoAdmin
  );
  const options: SelectProps["options"] = [
    { label: "Admin", value: "admin" },
    { label: "Khách hàng", value: "user" },
  ];
  const [userInfo, setUserInfo] = useState({
    fullName: userDetailAdmin.fullName,
    email: userDetailAdmin.email,
    mobile: userDetailAdmin.mobile,
    address: userDetailAdmin.address,
  });
  const [userBlocked, setUserBlocked] = useState(userDetailAdmin.isBlocked);
  const [userRole, setUserRole] = useState(userDetailAdmin.role);


  const handleChangeUserInfo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    setUserInfo((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleChangeSelect = (value: string) => {
    setUserRole(value);
  };

  const onChangeSwitch = (checked: boolean) => {
    setUserBlocked(checked);
  };

  const handleUpdateUserInfo = () => {
    const data: UserAdminUpdateType = {
      id: userDetailAdmin._id,
      fullName: userInfo.fullName,
      email: userInfo.email,
      mobile: userInfo.mobile,
      role: userRole,
      isBlocked: userBlocked,
      address: userInfo.address,
    };
    dispatch(UpdateUserDetailAdminAction(data));
  };

  return (
    <div className="customer-detail">
      <Typography.Title level={3} className="customer-detail__title">
        Thông tin chi tiết khách hàng
      </Typography.Title>
      <div className="customer-detail__form">
        <div className="customer-detail__row">
          <div className="customer-detail__item">
            <p>Họ và tên:</p>
            <Input
              placeholder=""
              name="fullName"
              value={userInfo.fullName}
              onChange={handleChangeUserInfo}
            />
          </div>
          <div className="customer-detail__item">
            <p>Phân quyền:</p>
            <Select
              defaultValue={userRole}
              onChange={handleChangeSelect}
              style={{ width: "100%" }}
              options={options}
            />
          </div>
        </div>
        <div className="customer-detail__row">
          <div className="customer-detail__item">
            <p>Email</p>
            <Input
              placeholder=""
              name="email"
              value={userInfo.email}
              onChange={handleChangeUserInfo}
            />
          </div>
          <div className="customer-detail__item">
            <p>Chặn người dùng:</p>
            <Switch checked={userBlocked} onChange={onChangeSwitch} />
          </div>
        </div>
        <div className="customer-detail__row">
          <div className="customer-detail__item">
            <p>Số điện thoại:</p>
            <Input
              placeholder=""
              name="mobile"
              value={userInfo.mobile}
              onChange={handleChangeUserInfo}
            />
          </div>
          <div className="customer-detail__item">
            <p>Ngày tạo:</p>
            <Input placeholder="" value={userDetailAdmin.createdAt} />
          </div>
        </div>
        <div className="customer-detail__row">
          <div className="customer-detail__item">
            <p>Địa chỉ:</p>
            <Input
              placeholder=""
              name="address"
              value={userInfo.address}
              onChange={handleChangeUserInfo}
            />
          </div>
          <div className="customer-detail__item">
            <p>Ngày cập nhật:</p>
            <Input placeholder="" value={userDetailAdmin.updatedAt} />
          </div>
        </div>
      </div>
      <div className="customer-detail__bottom">
        <Button
          className="customer-detail__bottom--back"
          onClick={() => navigate("/admin-customers")}
        >
          Quay lại
        </Button>
        <Button
          className="customer-detail__bottom--update"
          onClick={handleUpdateUserInfo}
        >
          Cập nhật thông tin
        </Button>
      </div>
    </div>
  );
};

export default CustomerDetail;
