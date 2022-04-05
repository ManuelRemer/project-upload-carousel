import { createContext, useEffect, useReducer, useRef } from "react";
import { useFetch } from "../hooks/useFetch";

export const AdminContext = createContext();

const AdminReducer = (state, action) => {
  switch (action.type) {
    case "ADMIN_CHECK":
      return { ...state, admin: true };
    case "LOGIN":
      return { ...state, adminLogged: true, admin: true };
    case "LOGOUT":
      return { ...state, adminLogged: false, token: null };
    default:
      return state;
  }
};

export const AdminContextProvider = ({ children }) => {
  const admin = useFetch("/api/v1/admin/check");
  const adminRef = useRef(admin);
  const adminExits = adminRef.current.data;

  const [state, dispatch] = useReducer(AdminReducer, {
    admin: false,
    adminLogged: false,
    token: null,
  });

  useEffect(() => {
    if (adminExits) {
      dispatch({ type: "ADMIN_CHECK" });
      return;
    }
    if (JSON.parse(localStorage.getItem("userData"))) {
      dispatch({ type: "LOGIN" });
    }
  }, [adminExits]);

  return (
    <AdminContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
