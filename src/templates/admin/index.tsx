import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Menu, Typography, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import jwtDecode, { JwtPayload } from "jwt-decode";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.jpg";

import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import "./style.scss";
import { ACCESS_TOKEN, getStore } from "../../utils/config";


const AdminLayout = () => {
  const navigate = useNavigate();
  const token: any = getStore(ACCESS_TOKEN);
  const decoded = jwtDecode<JwtPayload>(token);

  console.log(decoded);

  const items: MenuProps["items"] = [
    {
      key: "0",
      icon: <AiOutlineUser className="fs-4" />,
      label: "Thông tin cá nhân",
    },
    {
      type: "divider",
    },
    {
      key: "0",
      icon: <LuLogOut className="fs-4" />,
      label: "Đăng xuất",
    },
  ];

  return (
    <div className="admin-layout">
      <div className="admin-layout__left">
        <Link to="/admin-dashboard" className="admin-layout__left__logo">
          <img src={logo} alt="logo" />
          <Typography.Title level={3}>Ecommerce</Typography.Title>
        </Link>
        <div className="admin-layout__left__menu">
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key !== "signout") {
                navigate(key);
              }
            }}
            items={[
              {
                key: "admin-dashboard",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Trang chủ",
              },
              {
                key: "admin-customers",
                icon: <AiOutlineUser className="fs-4" />,
                label: "Danh sách khách hàng",
              },
              {
                key: "admin-customers",
                icon: <AiOutlineShoppingCart className="fs-4" />,
                label: "Danh sách sản phẩm",
              },
              {
                key: "admin-customers",
                icon: <SiBrandfolder className="fs-4" />,
                label: "Danh sách thương hiệu",
              },
              {
                key: "admin-customers",
                icon: <BiCategoryAlt className="fs-4" />,
                label: "Danh sách loại sản phẩm",
              },
              {
                key: "admin-customers",
                icon: <AiOutlineBgColors className="fs-4" />,
                label: "Danh sách màu sắc",
              },
              {
                key: "orders",
                icon: <FaClipboardList className="fs-4" />,
                label: "Đặt hàng",
              },
              {
                key: "orders",
                icon: <RiCouponLine className="fs-4" />,
                label: "Danh sách phiếu mua hàng",
              },
              {
                key: "blogs",
                icon: <FaBloggerB className="fs-4" />,
                label: "Bài viết",
                children: [
                  {
                    key: "blog-list",
                    icon: <FaBloggerB className="fs-4" />,
                    label: "Danh sách bài viết",
                  },
                  {
                    key: "blog-category-list",
                    icon: <FaBloggerB className="fs-4" />,
                    label: "Danh sách loại bài viết",
                  },
                ],
              },
              {
                key: "enquiries",
                icon: <FaClipboardList className="fs-4" />,
                label: "Enquiries",
              },
            ]}
          />
        </div>

      </div>
      <div className="admin-layout__right">
        <div className="admin-layout__header">
          <Dropdown
            menu={{ items }} trigger={["click"]}
            className="admin-layout__header__notification"
          >
            <Space>
              <MdOutlineNotificationsActive className="admin-layout__header__notification--icon" />
              <p>99+</p>
            </Space>
          </Dropdown>
          <Dropdown
            menu={{ items }} trigger={["click"]}
            className="admin-layout__header__dropdown"
          >
            <Space>
              <img src={avatar} alt="avatar" />
            </Space>
          </Dropdown>
        </div>
        <div className="admin-layout__body">
          <div className="admin-layout__body__container">
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="light"
            />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminLayout;