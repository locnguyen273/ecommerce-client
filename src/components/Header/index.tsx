import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-client.jpg";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { menu } from "../../utils/menu";
import { Button, Dropdown, Drawer } from "antd";
import type { MenuProps } from "antd";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link to="/dang-nhap">Đăng nhập</Link>,
  },
  {
    key: "2",
    label: <Link to="/dang-ky">Đăng ký</Link>,
  },
  {
    key: "3",
    label: <Link to="">Đăng xuất</Link>,
  },
];

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={() => setActive(location.pathname)}>
          <img src={Logo} alt="logo" />
        </Link>
        <div className="header__menu">
          {menu.length > 0 &&
            menu.map((item) => {
              return (
                <Link
                  key={item.id} to={item.path}
                  onClick={() => setActive(item.path)}
                  className={active === item.path ? "header__menu__active" : "header__menu__item"}
                >
                  {item.label}
                </Link>
              );
            })}
        </div>
        <div className="header__right">
          <Button className="header__right__cart">
            <AiOutlineShoppingCart />
            <span>0</span>
          </Button>
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            className="header__right__account"
          >
            <BiUserCircle />
          </Dropdown>
          <Button className="header__right__drawer" onClick={showDrawer}>
            <AiOutlineMenu />
          </Button>
        </div>
      </div>
      <Drawer
        title={
          <Button className="header__mobile__close" onClick={onClose}>
            <AiOutlineClose style={{ margin: "0 10px 0 0"}} /> Đóng
          </Button>
        }
        width={"100%"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <ul className="header__mobile">
          {menu.length > 0 &&
            menu.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              );
            })}
          <li>
            <Link to="/dang-ky">Đăng ký</Link>
          </li>
          <li>
            <Link to="/dang-nhap">Đăng nhập</Link>
          </li>
          <li>
            <Link to="/dang-xuat">Đăng xuất</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
