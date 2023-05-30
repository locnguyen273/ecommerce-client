// lưu localStorage value là chuỗi
const saveStringLocal = (key: string, value: any) => {

  localStorage.setItem(key, value);
}

// lưu localStorage value là chuỗi
const getStringLocal = (key: string) => {

  return localStorage.getItem(key);
}

// lưu localStorage value là object hoặc list object
const saveLocal = (key: string, value: any) => {

  const data: any = JSON.stringify(value);
  localStorage.setItem(key, data);
}

// lấy localStorage
const getLocal = (key: string) => {
  const local: any = localStorage.getItem(key);
  const data: any = JSON.parse(local);
  return data;
}

// xóa localStorage
const removeLocal = (key: string) => {
  localStorage.removeItem(key);
}

export { saveStringLocal, getStringLocal, saveLocal, getLocal, removeLocal }