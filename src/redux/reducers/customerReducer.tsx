import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../models/userModel";
import { AppDispatch } from "../configStore";
import { http } from "../../utils/config";

const initialState: any = {
  listCustomer: [],
  customerDetail: {}
};

const CustomerReducer = createSlice({
  name: "CustomerReducer",
  initialState,
  reducers: {
    getListCustomer: (state, action: PayloadAction<UserType[]>) => {
      state.listCustomer = action.payload;
    },
    getCustomerById: (state, action: PayloadAction<UserType>) => {
      state.customerDetail = action.payload;
    },
  },
});

export const { 
  getListCustomer,
  getCustomerById
} = CustomerReducer.actions;
export default CustomerReducer.reducer;

// ---------- Action API ---------- //
export const GetListCustomerAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("user/all-users");
      dispatch(getListCustomer(result.data.data));
    } catch (error) {
      console.log(error);
    }
  }
};
export const GetCustomerDetailAction = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`user/${id}`);
      dispatch(getCustomerById(result.data.data));
    } catch (error) {
      console.log(error);
    }
  }
}
