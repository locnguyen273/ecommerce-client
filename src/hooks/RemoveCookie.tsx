import Cookie from "js-cookie";

const RemoveCookie = (cookieName: string) => {
  return Cookie.remove(cookieName);
}

export default RemoveCookie