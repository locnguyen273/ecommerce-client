/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./style.scss";
import { Button, Pagination, Typography, Modal } from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  GetListCustomerAction, GetUserDetailAdminAction,
} from "../../../redux/reducers/customerReducer";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { UserType } from "../../../models/userModel";
import CustomInput from "../../../components/CustomInput";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(GetListCustomerAction());
  }, []);

  const listCustomer: UserType[] = useSelector(
    (state: RootState) => state.CustomerReducer.listCustomer
  );

  const showModal = (userId: string) => {
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
        Danh sách khách hàng
      </Typography.Title>
      {/* <div className="customer__add-customer">
        <Button>Thêm khách hàng</Button>
      </div> */}
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
        <tbody>
          {listCustomer.length > 0 &&
            listCustomer.map((item: UserType, index: number) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
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
                    <Button className="customer__delete">
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="customer__pagination">
        <Pagination defaultCurrent={1} total={listCustomer.length} />
      </div>
      <Modal
        open={open}
        title="Thông tin khách hàng"
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Cập nhật
          </Button>,
        ]}
      >
        <div>
          <CustomInput
            type="text"
            label="Email:"
            id="email"
            name="email"
            onChange={() => {}}
            onBlur={() => {}}
            val="{formik.values.email}"
            className="login__input"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Customer;
