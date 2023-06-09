import axios from "axios";
import { createBrowserHistory } from "history";

//history dùng để chuyển hướng trang trong các file không phải là component
export const history = createBrowserHistory();

export const settings = {
  setStorageJson: (name: string, data: any): void => {
    data = JSON.stringify(data);
    localStorage.setItem(name, data);
  },
  setStorage: (name: string, data: string): void => {
    localStorage.setItem(name, data);
  },
  getStorageJson: (name: string): any | undefined | null => {
    if (localStorage.getItem(name)) {
      const dataStore: string | undefined | null = localStorage.getItem(name);
      if (typeof dataStore == "string") {
        const data = JSON.parse(dataStore);
        return data;
      }
      return null;
    }
    return null;
  },
  getStore: (name: string): string | null | undefined => {
    if (localStorage.getItem(name)) {
      const data: string | null | undefined = localStorage.getItem(name);
      return data;
    }
    return null;
  },
  setCookieJson: (name: string, value: any, days: number): void => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    value = JSON.stringify(value);
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookieJson: (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return JSON.parse(c.substring(nameEQ.length, c.length));
    }
    return null;
  },
  setCookie: (name: string, value: string, days: number): void => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie: (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  eraseCookie: (name: string): void => {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  },
  timeout: (delay: number) => {
    return new Promise((res) => setTimeout(res, delay));
  },
  setStore: (name: string, value: any) => {
    localStorage.setItem(name, value);
  },
  setStoreJson: (name: string, value: any) => {
    const json = JSON.stringify(value);
    localStorage.setItem(name, json);
  },
  getStoreJson: (name: string) => {
    if (localStorage.getItem(name)) {
      const result: any = localStorage.getItem(name);
      // return JSON.parse(result);
      return result;
    }
    return null;
  },
  clearStore: (name: string) => {
    localStorage.removeItem(name);
  },
  ACCESS_TOKEN: "access_token",
  USER_LOGIN: "userLogin",
  ID_LOGIN: "id_login",
  ROLE_lOGIN: "role_login",
};

export const {
  setCookie,
  getCookie,
  setStore,
  getStore,
  setStoreJson,
  getStoreJson,
  clearStore,
  timeout,
  ACCESS_TOKEN,
  USER_LOGIN,
  ID_LOGIN,
  ROLE_lOGIN,
} = settings;

export const http = axios.create({
  baseURL: "https://ecommerce-shopping-api.onrender.com/api/", //tất cả các hàm khi gọi api đều sử dụng domain này
  timeout: 50000, //nếu request mất 5 phút mà không nhận được kết quả thì huỷ request
});
//Cấu hình cho request: Client gửi api đến server
http.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + settings.getStore(ACCESS_TOKEN),
      refreshToken: getCookie(ACCESS_TOKEN)
    };
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
//cấu hình cho response: Server sẽ trả dữ liệu về cho client
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //Thất bại của tất cả request sử dụng http sẽ trả vào đây
    console.log(error);
    if (error.response?.status === 401) {
      // window.location.href = "/login";
      //Chuyển hướng trang mà không cần reload lại trang để giữ được các state hiện tại trên redux
      // history.push("/login");
    }
    if (error.response?.status === 400 || error.response?.status === 400) {
      // history.push("/");
    }
    return Promise.reject(error);
  }
);

/* Các status code thường gặp
    200: Request gửi đi và nhận về kết quả thành
    201: request gửi đi thành công và đã được khởi tạo 
    400: bad request => request gửi đi thành công tuy nhiên không tìm thấy dữ liệu từ tham số gửi đi
    404: Not found (Không tìm thấy api đó), hoặc tương tự 400
    401: Unauthorize token không hợp lệ không có quyền truy cập vào api đó
    403: Forbinden token hợp lệ tuy nhiên chưa đủ quyền để truy cập vào api đó
    500: Error server (Lỗi xảy ra trên server có khả năng là frontend gửi dữ liệu chưa hợp lệ dẫn đến backend xử lý bị lỗi). Backend code lỗi trên server ! => Test bằng post man hoặc swagger nếu api không lỗi => front code sai, ngược lại tail fail trên post man và swagger thì báo backend fix.
*/