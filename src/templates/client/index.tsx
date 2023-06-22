import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Button } from "antd";
import { BsChevronUp } from "react-icons/bs";
import "./style.scss";

const UserTemplate = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowBackToTop(window.scrollY > 400);
    });
  }, []);
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className="user-layout">
      <Header />
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
      {showBackToTop && (
        <Button className="user-layout__back-to-top" onClick={handleBackToTop}>
          <BsChevronUp />
        </Button>
      )}
      <Footer />
    </div>
  );
};

export default UserTemplate;
