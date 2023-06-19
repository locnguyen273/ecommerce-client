import React, { useEffect } from "react";
import "./style.scss";
import { Button, Pagination, Typography } from "antd";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  GetListCustomerAction, GetUserDetailAdminAction,
} from "../../../redux/reducers/customerReducer";
import { AppDispatch, RootState } from "../../../redux/configStore";
import { UserType } from "../../../models/userModel";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Customer = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(GetListCustomerAction());
  }, []);

  const listCustomer: UserType[] = useSelector(
    (state: RootState) => state.CustomerReducer.listCustomer
  );

  const showModal = () => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa người dùng không ?",
      showDenyButton: true,
      showCancelButton: false,
      denyButtonText: `Hủy`,
      confirmButtonText: "Xóa",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Đã xóa thành công !", "", "success")
      } else if (result.isDenied) {
        Swal.fire("Đã xóa thất bại", "", "info")
      }
    })
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
        </tbody>
      </table>
      <div className="customer__pagination">
        <Pagination defaultCurrent={1} total={listCustomer.length} />
      </div>
    </div>
  );
};

export default Customer;
