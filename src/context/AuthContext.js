import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { push } = useHistory();
  const [authInfo, setAuthInfo] = useLocalStorage("s11g2", {});

  const logout = () => {
    setAuthInfo({});
    push("/login");
  };

  const login = (credentials) => {
    axios
      .post("http://localhost:9000/api/login", credentials)
      .then((res) => setAuthInfo(res.data))
      .catch((err) => console.log(err));
  };

  const isLoggedIn = authInfo && authInfo.token;

  return (
    <AuthContext.Provider value={{ authInfo, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
