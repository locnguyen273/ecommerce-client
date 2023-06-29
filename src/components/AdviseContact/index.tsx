import React from "react";
import { motion } from "framer-motion";
import { Typography, Input, Button } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import "./style.scss";

const { TextArea } = Input;

const AdviseContact = () => {
  return (
    <div className="advise-contact">
      <div className="advise-contact__container">
        <motion.div
          className="advise-contact__animate"
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
        <div className="advise-contact__right">
          <Typography.Title level={4}>LIÊN HỆ TƯ VẤN</Typography.Title>
          <Input
            className="advise-contact__right--input"
            placeholder="Họ và tên *"
            prefix={<UserOutlined />}
          />
          <Input
            className="advise-contact__right--input"
            placeholder="Email liên hệ *"
            prefix={<MailOutlined />}
          />
          <Input
            className="advise-contact__right--input"
            placeholder="Điện thoại liên hệ *"
            prefix={<PhoneOutlined />}
          />
          <TextArea
            className="advise-contact__right--textarea"
            rows={6}
            placeholder="Bạn cần tư vấn thêm về chương trình, vui lòng để lại tin nhắn tại đây..."
            maxLength={4}
          />
          <Button className="advise-contact__right--register">
            Đăng ký tư vấn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdviseContact;
