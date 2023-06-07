import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { Menu, Typography, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
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
import { MdProductionQuantityLimits } from "react-icons/md"
import { LuLogOut } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import "./style.scss";
import { ACCESS_TOKEN, ID_LOGIN, getCookie } from "../../utils/config";
import RemoveCookie from "../../hooks/RemoveCookie";

const AdminLayout = () => {
  const navigate = useNavigate();
  const token = getCookie(ACCESS_TOKEN);
  const roleUser = getCookie(ID_LOGIN);

  const handleLogout = () => {
    navigate("/admin-login");
    RemoveCookie(ACCESS_TOKEN);
    RemoveCookie(ID_LOGIN);
  };

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
      onClick: () => handleLogout(),
    },
  ];

  if (token && roleUser === "admin") {
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
                  key: "products",
                  icon: <MdProductionQuantityLimits className="fs-4" />,
                  label: "Sản phẩm",
                  children: [
                    {
                      key: "admin-products",
                      icon: <AiOutlineShoppingCart className="fs-4" />,
                      label: "Danh sách sản phẩm",
                    },
                    {
                      key: "admin-brands",
                      icon: <SiBrandfolder className="fs-4" />,
                      label: "Danh sách thương hiệu",
                    },
                    {
                      key: "admin-category-products",
                      icon: <BiCategoryAlt className="fs-4" />,
                      label: "Danh sách loại sản phẩm",
                    },
                    {
                      key: "admin-colors",
                      icon: <AiOutlineBgColors className="fs-4" />,
                      label: "Danh sách màu sắc",
                    },
                  ],
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
              menu={{ items }}
              trigger={["click"]}
              className="admin-layout__header__notification"
            >
              <Space>
                <MdOutlineNotificationsActive className="admin-layout__header__notification--icon" />
                <p>99+</p>
              </Space>
            </Dropdown>
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
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
  } else {
    return <Navigate to="/admin-login" />;
  }
};
export default AdminLayout;
