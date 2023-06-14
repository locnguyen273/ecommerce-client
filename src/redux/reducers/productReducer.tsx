import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import {
  // history,
  // ACCESS_TOKEN,
  // getStore,
  http,
  // ID_LOGIN,
  // setCookie,
  // setStore,
} from "../../utils/config";
// import { toast } from "react-toastify";

const initialState: any = {
  listBrand: [],
};

const ProductReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    getListBrandAction: (state, action: PayloadAction) => {
      state.listBrand = action.payload;
    },
  },
});

export const { getListBrandAction } = ProductReducer.actions;
export default ProductReducer.reducer;

// ---------- Action API ---------- //
export const GetListBrandsAction = (pageStart: number, pageSize: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`brand?page=2&limit=10`);
      if (result.status === 200) {
        dispatch(getListBrandAction(result.data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
