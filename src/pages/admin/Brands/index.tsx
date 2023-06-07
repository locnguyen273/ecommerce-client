/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Modal, Pagination, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { GetListBrandsAction } from "../../../redux/reducers/productReducer";
import { BrandType } from "../../../models/brandModel";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const Brands = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagination, setPagination] = useState({
    pageStart: 1,
    pageSize: 10
  });

  
  useEffect(() => {
    dispatch(GetListBrandsAction(pagination.pageStart, pagination.pageSize));
  }, []);

  const listBrand = useSelector((state: RootState) => state.ProductReducer.listBrand);
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
        Danh sách nhãn hiệu
      </Typography.Title>
      <div className="customer__add-customer">
        <Button onClick={showModal}>Thêm nhãn hiệu</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên nhãn hiệu</th>
            <th>Tên người tạo</th>
            <th>Ngày tạo</th>
            <th>Ngày cập nhật</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listBrand.data?.length > 0 &&
            listBrand.data?.map((item: BrandType, index: number) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.createdBy}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
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
        title="Thêm nhãn hiệu mới"
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div className="customer__pagination">
        <Pagination defaultCurrent={1} total={listBrand.total.length} />
      </div>
    </div>
  );
};

export default Brands;
