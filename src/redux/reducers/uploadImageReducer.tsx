import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UploadService from "../../services/uploadImageService";

export const UploadImage = createAsyncThunk(
  "upload/images",
  async (data: any, thunkAPI) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < data.length; i++) {
        formData.append("images", data[i]);
      }
      return await UploadService.uploadImage(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const DeleteImage = createAsyncThunk(
  "delete/images",
  async (id: string, thunkAPI) => {
    try {
      return await UploadService.deleteImage(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  images: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const UploadSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UploadImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = action.payload;
      })
      .addCase(UploadImage.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(DeleteImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(DeleteImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.images = [];
      })
      .addCase(DeleteImage.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default UploadSlice.reducer;
