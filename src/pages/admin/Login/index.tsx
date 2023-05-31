import React, { useEffect } from "react";
import CustomInput from "../../../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../features/auth/authSlice";
import logo from "../../../assets/images/logo.png";
import "./style.scss";
import { Typography } from "antd";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email không đúng định dạng. Vui lòng nhập lại!")
    .required("Vui lòng nhập email."),
  password: yup.string().required("Vui lòng nhập password."),
});
const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // dispatch(login(values));
      navigate("/admin-dashboard");
    },
  });
  // const authState = useSelector((state) => state);

  // const { user, isError, isSuccess, isLoading, message } = authState.auth;

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate("admin");
  //   } else {
  //     navigate("");
  //   }
  // }, [user, isError, isSuccess, isLoading]);
  return (
    <div className="login">
      <div className="login__container">
        <img className="login__logo" src={logo} alt="logo" />
        <Typography.Title level={3} className="login__title">
          Đăng Nhập
        </Typography.Title>
        <div className="error text-center">
          {/* {message.message == "Rejected" ? "You are not an Admin" : ""} */}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="login__group">
            <CustomInput
              type="text"
              label="Email:"
              id="email"
              name="email"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
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
              onBlur={formik.handleBlur("password")}
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
          <button className="login__submit" type="submit">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;