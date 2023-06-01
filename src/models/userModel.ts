export interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
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