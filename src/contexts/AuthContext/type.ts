import { IUser } from "../../models/user";

export interface IAuthContextTypes {
  user: IUser | null;
  register: (credentials1: IUserRegister) => void;
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
  last_login: string;
  is_superuser: boolean;
  is_staff: boolean;
  date_joined: string;
  activation_code: string;
  username: string;
  is_active: boolean;
  groups: number[];
  user_permissions: number[];
}

export interface ITokens {
  access: string;
  refresh: string;
}
