import React from "react";
import { motion } from "framer-motion";
import { Typography, Input } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import AdviseContactImg from "../../assets/images/advise-contact.jpg";
import "./style.scss";

const AdviseContact = () => {
  return (
    <div className="advise-contact">
      <motion.div
        animate={{
          translateX: [80, 150],
          translateY: [50, 50],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <img
          src="https://cybersoft.edu.vn/wp-content/uploads/2019/10/banner-effect-2.png"
          alt=""
        />
      </motion.div>
      <img className="advise-contact__beauty" src={AdviseContactImg} alt="" />
      <div className="advise-contact__right">
        <Typography.Title level={4}>LIÊN HỆ TƯ VẤN</Typography.Title>
        <Input placeholder="default size" prefix={<UserOutlined />} />
        <Input placeholder="default size" prefix={<MailOutlined />} />
        <Input placeholder="default size" prefix={<PhoneOutlined />} />
      </div>
    </div>
  );
};

export default AdviseContact;
