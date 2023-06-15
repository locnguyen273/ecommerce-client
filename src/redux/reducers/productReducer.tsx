import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";
import { http } from "../../utils/config";
import { toast } from "react-toastify";
import { HideLoadingAction, ShowLoadingAction } from "./loadingReducer";
import { ProductType } from "../../models/productModel";

const initialState: any = {
  listBrand: [],
  listProduct: [],
  listCategoryProduct: [],
  listBrandProduct: [],
  listColorProduct: [],
};

const ProductReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    getListBrandAction: (state, action: PayloadAction) => {
      state.listBrand = action.payload;
    },
    getListProductAction: (state, action: PayloadAction) => {
      state.listProduct = action.payload;
    },
    getListBrandProductAction: (state, action: PayloadAction) => {
      state.listBrandProduct = action.payload;
    },
    getListCategoryProductAction: (state, action: PayloadAction) => {
      state.listCategoryProduct = action.payload;
    },
    getListColorProductAction: (state, action: PayloadAction) => {
      state.listColorProduct = action.payload;
    },
  },
});

export const { 
  getListBrandAction, 
  getListProductAction,
  getListBrandProductAction,
  getListCategoryProductAction,
  getListColorProductAction,
} = ProductReducer.actions;
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

export const GetListProductsAction = (pageStart: number, pageSize: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(ShowLoadingAction());
      const result = await http.get(
        `product?page=${pageStart}&limit=${pageSize}`
      );
      if (result.status === 200) {
        dispatch(getListProductAction(result.data.data));
      }
      dispatch(HideLoadingAction());
    } catch (error) {
      console.log(error);
    }
  };
};

// Add product
export const GetListBrandProductAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`brand`);
      dispatch(getListBrandProductAction(result.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetListCategoryProductAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`product-category`);
      dispatch(getListCategoryProductAction(result.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetListColorProductAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`color`);
      dispatch(getListColorProductAction(result.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const CreateNewProductAction = (product: ProductType) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("product", product);
      if(result.status === 200) {
        toast.success(result.data.message);
      }
      return { status: true, data: result.data };
    } catch (error) {
      console.log(error);
    }
  }
};
