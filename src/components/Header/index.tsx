import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo-client.jpg";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { Button, Drawer } from "antd";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className={scroll ? "header scrolled" : "header"}>
      <div className="header__container">
        <Link
          to="/"
          className="header__logo"
          onClick={() => setActive(location.pathname)}
        >
          <img src={Logo} alt="logo" />
        </Link>
        <div className="header__menu">
          <Link
            to=""
            onClick={() => setActive("/")}
            className={
              active === "/" ? "header__menu__active" : "header__menu__item"
            }
          >
            Trang chủ
          </Link>
          <Link
            to="/danh-sach-san-pham"
            onClick={() => setActive("/danh-sach-san-pham")}
            className={
              active === "/danh-sach-san-pham"
                ? "header__menu__active"
                : "header__menu__item"
            }
          >
            Danh sách sản phẩm
          </Link>
          <Link
            to="/tin-cong-nghe"
            onClick={() => setActive("/tin-cong-nghe")}
            className={
              active === "/tin-cong-nghe"
                ? "header__menu__active"
                : "header__menu__item"
            }
          >
            Tin công nghệ
            <i className="fa fa-chevron-down"></i>
            <ul className="menuList-submain">
              <li>
                <Link to="" title="Tin công nghệ">
                  Tin công nghệ
                </Link>
              </li>
              <li>
                <Link to="" title="Khám phá">
                  Khám phá
                </Link>
              </li>
              <li>
                <Link to="" title="Tư vấn">
                  Tư vấn
                </Link>
              </li>
            </ul>
          </Link>
          <Link
            to="/ve-chung-toi"
            onClick={() => setActive("/ve-chung-toi")}
            className={
              active === "/ve-chung-toi"
                ? "header__menu__active"
                : "header__menu__item"
            }
          >
            Giới thiệu
            <i className="fa fa-chevron-down"></i>
            <ul className="menuList-submain">
              <li>
                <Link to="/ve-chung-toi" title="Về Chúng Tôi">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link to="/chinh-sach-va-dieu-khoan" title="Chính Sách Và Điều Khoản">
                  Chính Sách Và Điều Khoản
                </Link>
              </li>
            </ul>
          </Link>
        </div>
        <div className="header__right">
          <Button className="header__right__cart">
            <AiOutlineShoppingCart />
            <span>0</span>
          </Button>
          <Button className="header__right__account">
            <BiUserCircle />
            <ul className="menuList-submain">
              <li>
                <Link to="/dang-nhap" title="Đăng nhập">
                  Đăng nhập
                </Link>
              </li>
              <li>
                <Link to="/dang-ky" title="Đăng ký">
                  Đăng ký
                </Link>
              </li>
              <li>
                <Link to="" title="Đăng xuất">
                  Đăng xuất
                </Link>
              </li>
            </ul>
          </Button>
          <Button className="header__right__drawer" onClick={showDrawer}>
            <AiOutlineMenu />
          </Button>
        </div>
      </div>
      <Drawer
        title={
          <Button className="header__mobile__close" onClick={onClose}>
            <AiOutlineClose style={{ margin: "0 10px 0 0" }} /> Đóng
          </Button>
        }
        width={"100%"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <ul className="header__mobile">
          <li>
            <Link to="" className="header__mobile__row">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link to="" className="header__mobile__row">
              Danh sách sản phẩm
            </Link>
          </li>
          <li>
            <Link to="" className="header__mobile__row">
              <div>
                Tin công nghệ
                <i className="fa fa-chevron-down"></i>
              </div>
              <ul className="menuList-submain">
                <li>
                  <Link to="" title="Tin công nghệ">
                    Tin công nghệ
                  </Link>
                </li>
                <li>
                  <Link to="" title="Khám phá">
                    Khám phá
                  </Link>
                </li>
                <li>
                  <Link to="" title="Tư vấn">
                    Tư vấn
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to="" className="header__mobile__row">
              <div>
                Giới thiệu
                <i className="fa fa-chevron-down"></i>
              </div>
              <ul className="menuList-submain">
                <li>
                  <Link to="/ve-chung-toi" title="Về Chúng Tôi">
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link to="/chinh-sach-va-dieu-khoan" title="Chính Sách Và Điều Khoản">
                    Chính sách và điều khoản
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to="/dang-ky" className="header__mobile__row">Đăng ký</Link>
          </li>
          <li>
            <Link to="/dang-nhap" className="header__mobile__row">Đăng nhập</Link>
          </li>
          <li>
            <Link to="/dang-xuat" className="header__mobile__row">Đăng xuất</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default Header;
