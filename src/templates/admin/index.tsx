import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
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
import { ImBlog } from "react-icons/im";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import "./style.scss";


const AdminLayout = () => {
  const navigate = useNavigate();

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
                label: "Dashboard",
              },
              {
                key: "admin-customers",
                icon: <AiOutlineUser className="fs-4" />,
                label: "Danh sách khách hàng",
              },
              {
                key: "Catalog",
                icon: <AiOutlineShoppingCart className="fs-4" />,
                label: "Catalog",
                children: [
                  {
                    key: "product",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "Add Product",
                  },
                  {
                    key: "list-product",
                    icon: <AiOutlineShoppingCart className="fs-4" />,
                    label: "Product List",
                  },
                  {
                    key: "brand",
                    icon: <SiBrandfolder className="fs-4" />,
                    label: "Brand",
                  },
                  {
                    key: "list-brand",
                    icon: <SiBrandfolder className="fs-4" />,
                    label: "Brand List ",
                  },
                  {
                    key: "category",
                    icon: <BiCategoryAlt className="fs-4" />,
                    label: "Category",
                  },
                  {
                    key: "list-category",
                    icon: <BiCategoryAlt className="fs-4" />,
                    label: "Category List",
                  },
                  {
                    key: "color",
                    icon: <AiOutlineBgColors className="fs-4" />,
                    label: "Color",
                  },
                  {
                    key: "list-color",
                    icon: <AiOutlineBgColors className="fs-4" />,
                    label: "Color List",
                  },
                ],
              },
              {
                key: "orders",
                icon: <FaClipboardList className="fs-4" />,
                label: "Orders",
              },
              {
                key: "marketing",
                icon: <RiCouponLine className="fs-4" />,
                label: "Marketing",
                children: [
                  {
                    key: "coupon",
                    icon: <ImBlog className="fs-4" />,
                    label: "Add Coupon",
                  },
                  {
                    key: "coupon-list",
                    icon: <RiCouponLine className="fs-4" />,
                    label: "Coupon List",
                  },
                ],
              },
              {
                key: "blogs",
                icon: <FaBloggerB className="fs-4" />,
                label: "Blogs",
                children: [
                  {
                    key: "blog",
                    icon: <ImBlog className="fs-4" />,
                    label: "Add Blog",
                  },
                  {
                    key: "blog-list",
                    icon: <FaBloggerB className="fs-4" />,
                    label: "Blog List",
                  },
                  {
                    key: "blog-category",
                    icon: <ImBlog className="fs-4" />,
                    label: "Add Blog Category",
                  },
                  {
                    key: "blog-category-list",
                    icon: <FaBloggerB className="fs-4" />,
                    label: "Blog Category List",
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