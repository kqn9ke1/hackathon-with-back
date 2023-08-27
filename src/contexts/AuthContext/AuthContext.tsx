import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import axios from "axios";
import { ADMINS, API } from "../../utils/consts";
import $axios from "../../utils/axios";
import { IAuthContextTypes, ITokens, IUserLogin, IUserRegister } from "./type";
import { IUser } from "../../models/user";

const authContext = createContext<IAuthContextTypes | null>(null);

type authContextPropsType = {
  children: ReactNode;
};

// Кастомный хук для удобного использования контекста аутентификации
export const useAuthContext = (): IAuthContextTypes => {
  return useContext(authContext) as IAuthContextTypes;
};

const AuthContext: FC<authContextPropsType> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const register = async (credentials1: IUserRegister) => {
    try {
      const res = await axios.post(`${API}/accounts/register/`, credentials1);
    } catch (e) {
      console.log(e, "error");
    }
  };

  const login = async (credentials: IUserLogin) => {
    try {
      const { data: tokens } = await axios.post<ITokens>(
        `${API}/accounts/login/`,
        credentials
      );

      localStorage.setItem("tokens", JSON.stringify(tokens));
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    localStorage.removeItem("tokens");
    setUser(null);
  };

  const checkAuth = async () => {
    try {
      const tokens = JSON.stringify(localStorage.getItem("tokens") as string);
      if (tokens) {
        const { data } = await $axios.get(`${API}/accounts/profile/`);
        setUser(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isAdmin = () => {
    if (!user) {
      return false;
    }
    return ADMINS.includes(user.email as string);
  };

  const value = {
    user,
    register,
    login,
    logout,
    checkAuth,
    isAdmin,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
