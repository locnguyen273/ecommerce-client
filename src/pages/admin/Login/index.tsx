import React, { useState } from "react";
import CustomInput from "../../../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import logo from "../../../assets/images/logo.png";
import "./style.scss";
import { Typography, Spin } from "antd";
import { LoginAdminAction } from "../../../redux/reducers/authReducer";
import { AppDispatch } from "../../../redux/configStore";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />;

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không đúng định dạng. Vui lòng nhập lại!")
    .required("Vui lòng nhập email."),
  password: yup.string().required("Vui lòng nhập password."),
});
const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      setLoadingSpinner(true);
      dispatch(LoginAdminAction(values)).then((res) => {
        if(res?.status === 200 && res.data.role === "admin") {
          setLoadingSpinner(false);
          navigate("/admin-dashboard");
        }
      });
    },
  });

  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src={logo} alt="logo" />
        <Typography.Title level={3} className="login__title">
          Đăng Nhập
        </Typography.Title>
        <div className="error text-center">
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="login__group">
            <CustomInput
              type="text"
              label="Email:"
              id="email"
              name="email"
              onChange={formik.handleChange("email")}
              val={formik.values.email}
              className="login__input"
            />
            <div className="login__error">
              {formik.touched.email && formik.errors.email}
            </div>
            <CustomInput
              type="password"
              label="Password:"
              id="pass"
              name="password"
              onChange={formik.handleChange("password")}
              val={formik.values.password}
              className="login__input"
            />
            <div className="login__error">
              {formik.touched.password && formik.errors.password}
            </div>
          </div>

          <div className="login__text-end">
            <Link to="forgot-password" className="">
              Quên mật khẩu ?
            </Link>
          </div>
          <button className="login__submit" type="submit" disabled={loadingSpinner}>
            {loadingSpinner ? <Spin indicator={antIcon} /> : "Đăng nhập"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;