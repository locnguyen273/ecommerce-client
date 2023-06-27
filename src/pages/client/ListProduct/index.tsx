import React, { useState } from "react";
import "./style.scss";
import { Button, Typography, Dropdown, Pagination } from "antd";
import ReactPlayer from "react-player";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import CardItem from "../../../components/CardItem";

const items: MenuProps["items"] = [
  {
    label: <a>Giá tăng dần</a>,
    key: "Giá tăng dần",
  },
  {
    label: <a>Giá giảm dần</a>,
    key: "Giá giảm dần",
  },
  {
    label: <a>Tên A - Z</a>,
    key: "Tên A - Z",
  },
  {
    label: <a>Tên Z - A</a>,
    key: "Tên Z - A",
  },
  {
    label: <a>Cũ nhất</a>,
    key: "Cũ nhất",
  },
  {
    label: <a>Mới nhất</a>,
    key: "Mới nhất",
  },
  {
    label: <a>Bán chạy nhất</a>,
    key: "Bán chạy nhất",
  },
];

const ListProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(false);

  return (
    <div className="list-product">
      <div className="list-product__container">
        <div className="list-product__left">
          <div className="list-product__left__group">
            <Button
              onClick={() => setSelectedCategory(!selectedCategory)}
              className={
                selectedCategory
                  ? "list-product__left--categoried"
                  : "list-product__left--category"
              }
            >
              Danh mục sản phẩm
              <i className="fa fa-chevron-down"></i>
            </Button>
            {selectedCategory && (
              <ul>
                <li>Điện thoại</li>
                <li>Máy tính bảng</li>
                <li>Laptop</li>
                <li>Đồng hồ, Máy ảnh</li>
                <li>PC, Màn hình</li>
                <li>Kit bàn phím cơ</li>
                <li>Keycap</li>
                <li>Switch</li>
                <li>Stab, Phụ kiện</li>
              </ul>
            )}
          </div>
          <div className="list-product__left__group">
            <Button
              onClick={() => setSelectedSupplier(!selectedSupplier)}
              className={
                selectedSupplier
                  ? "list-product__left--categoried"
                  : "list-product__left--category"
              }
            >
              Nhà cung cấp
              <i className="fa fa-chevron-down"></i>
            </Button>
            {selectedSupplier && (
              <ul>
                <li>iPhone</li>
                <li>Samsung</li>
                <li>Xiaomi</li>
                <li>OPPO</li>
                <li>vivo</li>
                <li>realme</li>
                <li>Macbook</li>
                <li>HP</li>
                <li>Dell</li>
                <li>ASUS</li>
                <li>Lenovo</li>
                <li>Microsoft Surface</li>
                <li>Acer</li>
                <li>Xiaomi</li>
                <li>LG</li>
                <li>Huawei</li>
                <li>MSI</li>
                <li>Gigabyte</li>
              </ul>
            )}
          </div>
        </div>
        <div className="list-product__right">
          <ReactPlayer
            className="list-product__right__video"
            muted
            loop
            playing
            url="https://dlcdnwebimgs.asus.com/files/media/24a8d5c8-0755-45ce-8792-9048d289b1e1/v5/features/images/video/large/s__video/sVideo.mp4"
          />
          <div className="list-product__right__heading">
            <div className="list-product__right__heading--left">
              <Typography.Title level={4}>Tất cả sản phẩm</Typography.Title>
              <p>
                301 <span>sản phẩm</span>
              </p>
            </div>
            <div className="list-product__right__heading--right">
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  Sắp xếp
                  <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
          <div className="list-product__right__body">
            <div className="list-product__right__list-product">
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
              <CardItem />
            </div>
            <Pagination
              className="list-product__right__pagination"
              defaultCurrent={1}
              total={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
