/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button, Pagination, Typography, Modal } from "antd";
import AddProduct from "../../../components/AdminProduct/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { GetListProductsAction } from "../../../redux/reducers/productReducer";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const Product = () => {
  const dispatch: AppDispatch = useDispatch();
  const [pagination, setPagination] = useState({
    pageStart: 1,
    pageSize: 10,
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    dispatch(GetListProductsAction(pagination.pageStart, pagination.pageSize));
  }, []);

  const listProduct = useSelector((state: RootState) => state.ProductReducer.listProduct);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="customer">
      <Typography.Title level={3} className="customer__title">
        Danh sách sản phẩm
      </Typography.Title>
      <div className="customer__add-customer">
        <Button onClick={showModal}>Thêm sản phẩm</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Thương hiệu</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Đã bán</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listProduct.length > 0 &&
            listProduct.map((item: any, index: number) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.sold}</td>
                  <td>
                    <Button
                      className="customer__edit"
                      onClick={() => {
                        // dispatch(GetUserDetailAdminAction(item._id)).then(res => {
                        //   if(res?.status === 200) {
                        //     navigate(`/admin-customers/${item._id}`)
                        //   }
                        // })
                      }}
                    >
                      <AiFillEdit />
                    </Button>
                    <Button className="customer__delete" onClick={showModal}>
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Modal
        width={700}
        open={open}
        title="Thêm sản phẩm mới"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Tạo mới
          </Button>,
        ]}
      >
        <AddProduct />
      </Modal>
      <div className="customer__pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default Product;
