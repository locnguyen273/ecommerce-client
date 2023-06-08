import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import { http } from "../../utils/config";
import { toast } from "react-toastify";
import { HideLoadingAction, ShowLoadingAction } from "./loadingReducer";

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
      dispatch(ShowLoadingAction());
      const result = await http.get(
        `brand?page=${pageStart}&limit=${pageSize}`
      );
      if (result.status === 200) {
        dispatch(getListBrandAction(result.data));
      }
      dispatch(HideLoadingAction());
    } catch (error) {
      console.log(error);
    }    

  };
};

export const CreateNewBrandAction = (title: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`brand`, { title: title });
      if (result.status === 200) {
        toast.success(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const DeleteOneBrandAction = (brandId: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`brand/${brandId}`);
      if (result.status === 200) {
        toast.success(result.data.message);
      }
      return { status: true };
    } catch (error) {
      console.log(error);
    }
  };
};
