import { ACCESS_TOKEN, getStore, http } from "../utils/config";


const config = {
  headers: {
    Authorization: `Bearer ${getStore(ACCESS_TOKEN) !== null ? getStore(ACCESS_TOKEN) : ""
      }`,
    Accept: "application/json",
  },
}

const uploadImage = async (data: any) => {
  const response = await http.post("upload", data, config);
  return response.data;
};

const deleteImage = async (id: string) => {
  const response = await http.delete(`upload/delete-img/${id}`, config);
  return response.data;
};

const UploadService = {
  uploadImage, deleteImage,
}

export default UploadService;
