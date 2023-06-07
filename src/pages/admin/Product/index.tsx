import { Button, Pagination, Typography, Modal } from "antd";
import React, { useState } from "react";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

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
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Phân quyền</th>
            <th></th>
          </tr>
        </thead>
        {/* <tbody>
          {listCustomer.length > 0 &&
            listCustomer.map((item: UserType, index: number) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.role}</td>
                  <td>
                    <Button
                      className="customer__edit"
                      onClick={() => {
                        dispatch(GetUserDetailAdminAction(item._id)).then(res => {
                          if(res?.status === 200) {
                            navigate(`/admin-customers/${item._id}`)
                          }
                        })
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
        </tbody> */}
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div className="customer__pagination">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default Product;
