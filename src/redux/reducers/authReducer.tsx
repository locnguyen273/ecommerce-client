import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import {
  history,
  ACCESS_TOKEN,
  getStore,
  http,
  ID_LOGIN,
  setCookie,
  setStore,
} from "../../utils/config";
import { toast } from "react-toastify";
import { UserType, LoginUserProps } from "../../models/userModel";

const initialState: any = {
  userAdminProfile: {},
};

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    loginAdminAction: (state, action: PayloadAction<UserType>) => {
      state.userAdminProfile = action.payload;
    },
  },
});

export const { loginAdminAction } = AuthReducer.actions;
export default AuthReducer.reducer;

// ---------- Action API ---------- //
export const LoginAdminAction = (user: LoginUserProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("user/admin-login", user);

      // set token
      setCookie(ACCESS_TOKEN, result.data.data.token, 30);
      setStore(ACCESS_TOKEN, result.data.data.token);
      // set id
      setCookie(ID_LOGIN, result.data.data._id, 30);
      setStore(ID_LOGIN, result.data.data._id);
      // set role
      setCookie(ID_LOGIN, result.data.data.role, 30);
      setStore(ID_LOGIN, result.data.data.role);

      if (result.status === 200) {
        toast.success(result.data.message);
        dispatch(loginAdminAction(result.data.data));
      } else {
        toast.error("Đăng nhập thất bại. Vui lòng thử lại sau !");
      }
      return { status: result.status, data: result.data.data };
    } catch (error) {
      toast.error("Đăng nhập thất bại. Vui lòng thử lại sau !");
    }
  };
};
