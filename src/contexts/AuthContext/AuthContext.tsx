import React, { FC, ReactNode, createContext } from "react";

const authContext = createContext<null>(null);
type authContextPropsType = {
  children: ReactNode;
};
const AuthContext: FC<authContextPropsType> = ({ children }) => {
  return <authContext.Provider value={null}>{children}</authContext.Provider>;
};

export default AuthContext;
