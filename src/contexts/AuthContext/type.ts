import { IUser } from "../../models/user";

export interface IAuthContextTypes {
  user: IUser | null;
  register: (credentials: IUserRegister) => void;
  login: (credentials: IUserLogin) => void;
  logout: () => void;
  checkAuth: () => void;
}
export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  password2: string;
  first_name: string;
  last_name: string;
}

export interface ITokens {
  access: string;
  refresh: string;
}
