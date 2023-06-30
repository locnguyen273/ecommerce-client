import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import * as yup from "yup";
import { useFormik } from "formik";
import "./style.scss";
import CustomInput from "../../../components/CustomInput";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không đúng định dạng. Vui lòng nhập lại!")
    .required("Vui lòng nhập email."),
  password: yup.string().required("Vui lòng nhập password."),
});

const Login = () => {
  // const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login-user">
      <div className="login-user__container">
        <div className="login-user__header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <Typography.Title level={4}>Đăng nhập Smember</Typography.Title>
        </div>
        <div className="login-user__error">
          <p>{formik.touched.email && formik.errors.email}</p>
          <p>{formik.touched.password && formik.errors.password}</p>
        </div>
        <div className="login-user__body">
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="Email:"
              id="email"
              name="email"
              onChange={formik.handleChange("email")}
              val={formik.values.email}
              className="login__input"
            />
            <CustomInput
              type="password"
              label="Mật khẩu:"
              id="pass"
              name="password"
              onChange={formik.handleChange("password")}
              val={formik.values.password}
              className="login__input"
            />

            <div className="login-user__body--text-end">
              <Link to="forgot-password" className="">
                Quên mật khẩu ?
              </Link>
            </div>
            <div className="login-user__body__login-other">
              <div className="login-user__body__login-other__head">
                <span></span>
                <p>Hoặc đăng nhập bằng</p>
                <span></span>
              </div>
              <div className="login-user__body__login-other__body">
                <Button className="login-user__body__login-other__body--google">
                  <img
                    src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png"
                    alt=""
                  />
                  Đăng nhập bằng Google
                </Button>
                <Button className="login-user__body__login-other__body--zalo">
                  <img
                    src="https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png"
                    alt=""
                  />
                  Đăng nhập bằng Zalo
                </Button>
              </div>
              <p className="login-user__body__login-other__bottom">
                Bạn chưa có tài khoản ?<Link to="/dang-ky">Đăng ký ngay</Link>
              </p>
            </div>
            <button className="login-user__body__submit" type="submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
