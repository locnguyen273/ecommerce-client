import { Button, Modal, Pagination, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { AppDispatch, RootState } from "../../../redux/configStore";
import {
  CreateNewBrandAction,
  DeleteOneBrandAction,
  GetListBrandsAction,
} from "../../../redux/reducers/productReducer";
import { BrandType } from "../../../models/brandModel";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import CustomInput from "../../../components/CustomInput";

const Brands = () => {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [pagination, setPagination] = useState({
    pageStart: 1,
    pageSize: 10,
  });
  const [createTitle, setCreateTitle] = useState("");

  useEffect(() => {
    dispatch(GetListBrandsAction(pagination.pageStart, pagination.pageSize));
  }, [pagination.pageStart]);

  const listBrand = useSelector(
    (state: RootState) => state.ProductReducer.listBrand
  );
  const showModalCreateTitle = () => {
    setOpen(true);
  };

  const handleCreateTitle = () => {
    dispatch(CreateNewBrandAction(createTitle.toLowerCase()));
  };

  const handleDeleteBrand = (id: string) => {
    dispatch(DeleteOneBrandAction(id)).then((res) => {
      if(res?.status) {
        dispatch(GetListBrandsAction(pagination.pageStart, pagination.pageSize));
      }
    });
  }

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="customer">
      <Typography.Title level={3} className="customer__title">
        Danh sách nhãn hiệu
      </Typography.Title>
      <div className="customer__add-customer">
        <Button onClick={showModalCreateTitle}>Thêm nhãn hiệu</Button>
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
                  <td>{moment(item.createdAt).utc().format("DD/MM/YYYY")}</td>
                  <td>{moment(item.updatedAt).utc().format("DD/MM/YYYY")}</td>
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
                    <Button
                      className="customer__delete"
                      onClick={() => handleDeleteBrand(item._id)}
                    >
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
        onOk={handleCreateTitle}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleCreateTitle}>
            Tạo mới
          </Button>,
        ]}
      >
        <CustomInput
          type="text"
          label="Tên nhãn hiệu:"
          id="title"
          name="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreateTitle(e.target.value)
          }
          val={createTitle}
          className="login__input"
        />
      </Modal>
      <div className="customer__pagination">
        <Pagination
          defaultCurrent={pagination.pageStart}
          total={listBrand.total}
          onChange={(e) =>
            setPagination((prev) => ({
              ...prev,
              pageStart: e,
            }))
          }
        />
      </div>
    </div>
  );
};

export default Brands;
