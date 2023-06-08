import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../configStore";

export const ON_LOADING = "ON_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";

const initialState = {
  isLoadingCommon: false,
};

const LoadingReducer = createSlice({
  name: "LoadingReducer",
  initialState,
  reducers: {
    showLoadingReducer: (state, action: PayloadAction) => {
      state.isLoadingCommon = true;
    },
    hideLoadingReducer: (state, action: PayloadAction) => {
      state.isLoadingCommon = false;
    },
  }
});

export const { 
  showLoadingReducer, 
  hideLoadingReducer, 
} = LoadingReducer.actions;
export default LoadingReducer.reducer;

// ---------- Action API ---------- //
export const ShowLoadingAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(showLoadingReducer());
    } catch (error) {
      console.log(error);
    }
  };
};

export const HideLoadingAction = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(hideLoadingReducer());
    } catch (error) {
      console.log(error);
    }
  };
};
