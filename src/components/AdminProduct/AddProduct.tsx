import React, { useEffect, useState } from "react";
import { Input, Select, SelectProps, Button } from "antd";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import "./style.scss";

const AddProduct = () => {
  const options: SelectProps["options"] = [];
  const [numImg, setNumImg] = useState(1);
  const [listImg, setListImg] = useState([{ id: `listImg-${numImg}` }]);

  useEffect(() => {
    setNumImg((prev) => prev + 1);
  }, [listImg]);

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const handleCreateNewListImg = () => {
    setListImg((prev) => [...prev, { id: `listImg-${numImg}` }]);
  };

  const handleDeleteOneImg = (id: string) => {
    const newFilter = listImg.filter((item) => item.id !== id);
    setListImg(newFilter);
  };

  return (
    <div className="add-product">
      <div className="add-product__row">
        <div className="add-product__col">
          <p>Tên sản phẩm:</p>
          <Input placeholder="" />
        </div>
        <div className="add-product__col">
          <p>Slug:</p>
          <Input placeholder="" />
        </div>
      </div>
      <div className="add-product__row">
        <div className="add-product__col">
          <p>Loại sản phẩm:</p>
          <Select
            mode="multiple"
            placeholder="Vui lòng chọn loại sản phẩm"
            defaultValue={["a10", "c12"]}
            onChange={(e) => {}}
            style={{ width: "100%" }}
            options={options}
          />
        </div>
        <div className="add-product__col">
          <p>Thương hiệu:</p>
          <Input placeholder="" />
        </div>
      </div>
      <div className="add-product__row">
        <div className="add-product__col">
          <p>Giá sản phẩm:</p>
          <Input type="number" placeholder="" />
        </div>
        <div className="add-product__col">
          <p>Số lượng:</p>
          <Input type="number" placeholder="" />
        </div>
      </div>
      <div className="add-product__row">
        <div className="add-product__col">
          <p>Mô tả sản phẩm:</p>
          <Input placeholder="" />
        </div>
        <div className="add-product__col">
          <p>Màu sắc:</p>
          <Select
            mode="multiple"
            placeholder="Vui lòng chọn màu sắc"
            defaultValue={["a10", "c12"]}
            onChange={(e) => {}}
            style={{ width: "100%" }}
            options={options}
          />
        </div>
      </div>
      <div className="add-product__image">
        <div className="add-product__image__head">
          <p>Hình ảnh:</p>
          <Button onClick={handleCreateNewListImg}>
            Thêm hình ảnh <AiOutlinePlus />
          </Button>
        </div>
        {listImg.length > 0 &&
          listImg.map((item) => {
            return (
              <div className="add-product__image__group" key={item.id}>
                <Input placeholder="" />
                <Button onClick={() => handleDeleteOneImg(item.id)}>
                  <AiOutlineDelete />
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddProduct;
