import React, { useEffect, useState } from "react";
import { Modal, Typography, Input, Select, SelectProps, Button } from "antd";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import "./style.scss";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateNewProductAction,
  GetListBrandProductAction,
  GetListCategoryProductAction,
  GetListColorProductAction,
  GetListProductsAction,
} from "../../redux/reducers/productReducer";
import {
  BrandProductType,
  CategoryProductType,
  ColorProductType,
  ProductType,
} from "../../models/productModel";

const { TextArea } = Input;

interface AddProductType {
  open?: boolean;
  setOpen: (value: boolean) => void;
}

const AddProduct = (props: AddProductType) => {
  const { open, setOpen } = props;
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListBrandProductAction());
    dispatch(GetListCategoryProductAction());
    dispatch(GetListColorProductAction());
  }, []);

  const listBrandProduct = useSelector(
    (state: RootState) => state.ProductReducer.listBrandProduct
  );
  const listCateProduct = useSelector(
    (state: RootState) => state.ProductReducer.listCategoryProduct
  );
  const listColorProduct = useSelector(
    (state: RootState) => state.ProductReducer.listColorProduct
  );
  const optionsBrand: SelectProps["options"] = [];
  const optionsCategory: SelectProps["options"] = [];
  const optionsColor: SelectProps["options"] = [];
  const [inputFields, setInputFields] = useState([""]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [proDescription, setProDescription] = useState("");
  const [proBrand, setProBrand] = useState("");
  const [proCate, setProCate] = useState("");
  const [proColor, setProColor] = useState([]);

  listBrandProduct?.forEach((item: BrandProductType) => {
    optionsBrand.push({ value: item.title, label: item.title.toUpperCase() });
  });
  listCateProduct?.forEach((item: CategoryProductType) => {
    optionsCategory.push({ value: item.name, label: item.name });
  });
  listColorProduct.forEach((item: ColorProductType) => {
    optionsColor.push({ value: item.colorValue, label: item.colorName });
  });

  const handleCancel = () => {
    setOpen(false);
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const data = [...inputFields];
    data[index] = event.target.value;
    setInputFields(data);
  };

  const handleCreateNewListImg = () => {
    const newField = "";
    setInputFields([...inputFields, newField]);
  };

  const handleDeleteOneImg = (index: number) => {
    const data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    setProduct((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const handleCreateNewProduct = () => {
    const newProduct : ProductType = {
      name: product.name,
      slug: product.name,
      description: proDescription,
      price: Number(product.price),
      quantity: Number(product.quantity),
      brand: proBrand,
      colors: proColor,
      category: proCate,
      images: inputFields,
    };
    dispatch(CreateNewProductAction(newProduct)).then(res => {
      if(res?.status) {
        dispatch(GetListProductsAction(1, 10));
        setOpen(false);
      }
    });
  };

  return (
    <Modal
      width={700}
      open={open}
      title={
        <Typography.Title level={3} style={{ textAlign: "center" }}>
          Thêm sản phẩm mới
        </Typography.Title>
      }
      onOk={handleCreateNewProduct}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" onClick={handleCreateNewProduct}>
          Tạo mới
        </Button>,
      ]}
    >
      <div className="add-product">
        <div className="add-product__row">
          <div className="add-product__col">
            <p>Tên sản phẩm:</p>
            <Input
              placeholder=""
              name="name"
              value={product.name}
              onChange={handleChangeValue}
            />
          </div>
          <div className="add-product__col">
            <p>Thương hiệu:</p>
            <Select
              placeholder="Vui lòng chọn nhãn hiệu"
              onChange={(e) => setProBrand(e)}
              style={{ width: "100%" }}
              options={optionsBrand}
            />
          </div>
        </div>
        <div className="add-product__row">
          <div className="add-product__col">
            <p>Loại sản phẩm:</p>
            <Select
              placeholder="Vui lòng chọn loại sản phẩm"
              onChange={(e) => setProCate(e)}
              style={{ width: "100%" }}
              options={optionsCategory}
            />
          </div>
          <div className="add-product__col">
            <p>Màu sắc:</p>
            <Select
              mode="multiple"
              placeholder="Vui lòng chọn màu sắc"
              onChange={(e) => setProColor(e)}
              style={{ width: "100%" }}
              options={optionsColor}
            />
          </div>
        </div>
        <div className="add-product__row">
          <div className="add-product__col">
            <p>Giá sản phẩm:</p>
            <Input
              type="number"
              placeholder=""
              name="price"
              value={product.price}
              onChange={handleChangeValue}
            />
          </div>
          <div className="add-product__col">
            <p>Số lượng:</p>
            <Input
              type="number"
              placeholder=""
              name="quantity"
              value={product.quantity}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="add-product__image">
          <p>Mô tả sản phẩm:</p>
          <TextArea
            rows={4}
            style={{ margin: "10px 0 0" }}
            name="description"
            value={proDescription}
            onChange={(e) => setProDescription(e.target.value)}
          />
        </div>
        <div className="add-product__image">
          <div className="add-product__image__head">
            <p>Hình ảnh:</p>
            <Button onClick={handleCreateNewListImg}>
              Thêm hình ảnh <AiOutlinePlus />
            </Button>
          </div>
          {inputFields.length > 0 &&
            inputFields.map((item, index) => {
              return (
                <div className="add-product__image__group" key={index}>
                  <Input
                    placeholder=""
                    name="urlImgValue"
                    value={inputFields[index]}
                    onChange={(event) => handleFormChange(index, event)}
                  />
                  <Button onClick={() => handleDeleteOneImg(index)}>
                    <AiOutlineDelete />
                  </Button>
                </div>
              );
            })}
        </div>
      </div>
    </Modal>
  );
};

export default AddProduct;
