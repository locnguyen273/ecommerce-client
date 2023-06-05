import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../models/userModel";
import { AppDispatch } from "../configStore";
import { http } from "../../utils/config";

const initialState: any = {
  listCustomer: [],
  userDetailInfoAdmin: {}
};

const CustomerReducer = createSlice({
  name: "CustomerReducer",
  initialState,
  reducers: {
    getListCustomer: (state, action: PayloadAction<UserType[]>) => {
      state.listCustomer = action.payload;
    },
    userInfoAdminAction: (state, action: PayloadAction<UserType>) => {
      state.userDetailInfoAdmin = action.payload;
    },
  },
});

export const { 
  getListCustomer,
  userInfoAdminAction
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

export const GetUserDetailAdminAction = (userId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`user/${userId}`);
      dispatch(userInfoAdminAction(result.data.data));
      return { status: result.status, data: result.data.data };
    } catch (error) {
      console.log(error);
    }
  }
}
