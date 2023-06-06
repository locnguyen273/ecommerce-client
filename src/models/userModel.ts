export interface UserType {
  _id: string;
  fullName: string;
  address: string;
  email: string;
  mobile: string,
  role: string,
  isBlocked: boolean,
  createdAt: string;
  updatedAt: string;
  __v: 0;
  accessToken: string;
}
export interface LoginUserProps {
  email: string;
  password: string;
}

export interface UserAdminUpdateType {
  id: string,
  fullName: string,
  address: string,
  email: string,
  mobile: string,
  role: string,
  isBlocked: boolean,
}
